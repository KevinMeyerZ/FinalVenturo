import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCurrencyFormatModule } from 'mat-currency-format';

import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbProgressbarModule,
  NgbTooltipModule,
  NgbPopoverModule,
  NgbPaginationModule,
  NgbNavModule,
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CKEditorModule } from "ckeditor4-angular";

import { BTugasRoutingModule } from './b-tugas-routing.module';
import { TestFinalComponent } from './test-final/test-final.component';

export const options: Partial<IConfig> = {
  thousandSeparator: '.',
};


@NgModule({
  declarations: [TestFinalComponent],
  imports: [
    NgSelectModule,
    CommonModule,
    BTugasRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbModule,
    ChartsModule,
    NgxPaginationModule,
    CKEditorModule,
    ImageCropperModule,
    DataTablesModule,
    FormsModule,
    UiSwitchModule,
    ArchwizardModule,
    NgxMaskModule.forRoot(options),
    Daterangepicker,
    MatCurrencyFormatModule
  ]
})
export class BTugasModule { }
