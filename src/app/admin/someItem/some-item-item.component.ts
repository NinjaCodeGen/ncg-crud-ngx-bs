// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { SomeItem } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest/data-context.service';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'someItemItem',
  templateUrl: './some-item-item.component.html'
})

export class SomeItemItemComponent extends BaseItemComponent<SomeItem> {
  @Input() myForm: FormGroup;

  constructor(
    protected datacontextService: DataContext,
    protected titleService: Title,
    protected entityService: EntityService, 
    protected modalDialogService: ModalDialogService,
    protected busyIndicatorService: BusyIndicatorService,
    protected notifierService: NotifierService,
    protected formBuilder: FormBuilder,
    protected location: Location,
    protected restoreService: RestoreService<SomeItem>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.SomeItemApi,
      entityService,
      modalDialogService,
      busyIndicatorService,
      notifierService,
      formBuilder,
      location,
      restoreService,
      routeParams,
      router,
      validationService
    );
  }

  buildForm(): void {
    this.formMetaData = require('./some-item.metaData.json');
    this.normalizeFormMetaData();
    this.addFormValidation();

    this.myForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );

    this.onValueChanged(); // (re)set validation messages now
  }

  private addFormValidation() {
    this.myForm = this.formBuilder.group({
      id: this.formMetaData.properties.id ? [
        this.formMetaData.properties.id['x-ncg'].defaultValue ?
          this.formMetaData.properties.id['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.id['x-ncg'].validations)
        )
      ] : null,
      name: this.formMetaData.properties.name ? [
        this.formMetaData.properties.name['x-ncg'].defaultValue ?
          this.formMetaData.properties.name['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.name['x-ncg'].validations)
        )
      ] : null
    });

    this.myForm.patchValue(this.item);
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
