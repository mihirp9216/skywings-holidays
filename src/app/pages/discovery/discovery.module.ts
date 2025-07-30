import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoveryRoutingModule } from './discovery-routing.module';
import { DiscoveryComponent } from './discovery.component';


@NgModule({
  declarations: [
    DiscoveryComponent
  ],
  imports: [
    CommonModule,
    DiscoveryRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DiscoveryModule { }
