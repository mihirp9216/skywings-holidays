import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToSRoutingModule } from './to-s-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToSComponent } from './to-s.component';


@NgModule({
  declarations: [
    ToSComponent
  ],
  imports: [
    CommonModule,
    ToSRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToSModule { }
