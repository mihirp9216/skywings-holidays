import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
  hideBanner = false;
  clearBanner() {

    this.hideBanner = true;
  }
}
