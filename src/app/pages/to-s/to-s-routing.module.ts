import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToSComponent } from './to-s.component';

const routes: Routes = [{ path: '', component: ToSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToSRoutingModule { }
