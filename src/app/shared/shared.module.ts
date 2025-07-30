import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PolicyComponent } from '../components/policy/policy.component';
import { ChipComponent } from '../components/chip/chip.component';
import { BannerComponent } from '../components/banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PolicyComponent,
    ChipComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PolicyComponent,
    ChipComponent,
    BannerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
