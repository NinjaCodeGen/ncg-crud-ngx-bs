import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocalQueryHelper, LocalStorageService, RestoreService, ValidationService } from './services';

// 3rd party
import { AccordionModule, ProgressbarModule } from 'ngx-bootstrap';
import { PaginationComponent, PaginationConfig } from 'ngx-bootstrap';

// pipes
import { DisplayDataTransformPipe, OrderBy } from './pipes';

// directives
import { InputDebounceComponent } from './directives/input-debounce';

// components
import { ParentFilterAndPagingComponent } from './components';

@NgModule({
  declarations: [
    DisplayDataTransformPipe,
    InputDebounceComponent,
    OrderBy,
    PaginationComponent,
    ParentFilterAndPagingComponent
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AccordionModule,
    InputDebounceComponent,
    PaginationComponent,
    ParentFilterAndPagingComponent,
    ProgressbarModule
  ],
  entryComponents: [
    PaginationComponent,
    ParentFilterAndPagingComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AccordionModule, ProgressbarModule
  ],
  providers: [
    FormBuilder,
    LocalQueryHelper,
    LocalStorageService,
    PaginationConfig,
    RestoreService,
    ValidationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdminCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminCommonModule,
      providers: [
        FormBuilder,
        PaginationConfig
      ]
    }
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
