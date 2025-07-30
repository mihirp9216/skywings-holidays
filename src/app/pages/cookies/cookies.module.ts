import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesRoutingModule } from './cookies-routing.module';
import { CookiesComponent } from './cookies.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CookiesComponent
  ],
  imports: [
    CommonModule,
    CookiesRoutingModule,
    SharedModule
  ]
})
export class CookiesModule { }
