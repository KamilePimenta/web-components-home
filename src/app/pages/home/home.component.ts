import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentBanner: number = 1;

  ngOnInit() {
    setInterval(() => {
      this.changeBannerFunc();
      console.log('interval', this.currentBanner)
    }, 5000);
  }

  changeBannerFunc() {
    if (this.currentBanner === 1) {
      this.currentBanner = 2;
      return;
    }

    if (this.currentBanner === 2) {
      this.currentBanner = 3;
      return;
    }

    this.currentBanner = 1;
  }
}
