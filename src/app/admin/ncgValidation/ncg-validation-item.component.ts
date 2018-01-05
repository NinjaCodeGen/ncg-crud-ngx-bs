// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { NcgValidation } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest/data-context.service';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'ncgValidationItem',
  templateUrl: './ncg-validation-item.component.html'
})

export class NcgValidationItemComponent extends BaseItemComponent<NcgValidation> {
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
    protected restoreService: RestoreService<NcgValidation>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.NcgValidationApi,
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
    this.formMetaData = require('./ncg-validation.metaData.json');
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
      valEmailAddressPattern: this.formMetaData.properties.valEmailAddressPattern ? [
        this.formMetaData.properties.valEmailAddressPattern['x-ncg'].defaultValue ?
          this.formMetaData.properties.valEmailAddressPattern['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valEmailAddressPattern['x-ncg'].validations)
        )
      ] : null,
      valMin0Max100Value: this.formMetaData.properties.valMin0Max100Value ? [
        this.formMetaData.properties.valMin0Max100Value['x-ncg'].defaultValue ?
          this.formMetaData.properties.valMin0Max100Value['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valMin0Max100Value['x-ncg'].validations)
        )
      ] : null,
      valMin2Max8Length: this.formMetaData.properties.valMin2Max8Length ? [
        this.formMetaData.properties.valMin2Max8Length['x-ncg'].defaultValue ?
          this.formMetaData.properties.valMin2Max8Length['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valMin2Max8Length['x-ncg'].validations)
        )
      ] : null,
      valRequiredField: this.formMetaData.properties.valRequiredField ? [
        this.formMetaData.properties.valRequiredField['x-ncg'].defaultValue ?
          this.formMetaData.properties.valRequiredField['x-ncg'].defaultValue :
          null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valRequiredField['x-ncg'].validations)
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
