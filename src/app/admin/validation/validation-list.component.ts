
// angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// api
import { Validation } from './../services/api/models';

// components
import { BaseListComponent } from './../common/components';

// pipes
import { DisplayDataTransformPipe } from './../common/pipes';

// services
import { LocalStorageService, RestoreService } from './../common/services';
import { DataContext } from './../services/api/rest/data-context.service';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

@Component({
  selector: 'validationList',
  templateUrl: './validation-list.component.html'
})

export class ValidationListComponent extends BaseListComponent<Validation>  {

  public keyName: 'id';
  public fieldFilterModel: any = null;
  public formMetaData: any = null;
  
  constructor(protected titleService: Title,
    protected entityService: EntityService, 
    protected modalDialogService: ModalDialogService, 
    protected busyIndicatorService: BusyIndicatorService, 
    protected notifierService: NotifierService,
    private datacontextService: DataContext,
    router: Router,
    activatedRoute: ActivatedRoute,
  ) {
    super(
      titleService,
      entityService,
      modalDialogService,
      busyIndicatorService,
      notifierService,
      datacontextService.ValidationApi,
      router,
      activatedRoute
    );

    this.formMetaData = require('./validation.metaData.json'); 
    this.componentName = 'ValidationListComponent';

    this.generateFilterModel();
  }

  public generateFilterModel() {
    const filterModel = [];
    if (this.formMetaData && this.formMetaData.properties) {
      for (const key in this.formMetaData.properties) {
        if (this.formMetaData.properties.hasOwnProperty(key)) {
          const element = this.formMetaData.properties[key];

          if (element.type && element['x-ncg']) {
            filterModel.push({
              display: element['x-ncg'].label,
              value: key
            });
          }
        }
      }
    }

    this.fieldFilterModel = filterModel;
  }

  public numPagesUpdated(event) { }
  
  protected customValidate() { }

  protected populateComponentDataAsync() {
  }
}
