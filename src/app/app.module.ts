import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './pages/home/home.component';
import { AssetsPathPipe } from './pipes/assets-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssetsPathPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor( private injector: Injector) {}

  ngDoBootstrap() {
    const childAppComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('kms-home', childAppComponent);
  }
}
