import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ClickerComponent } from './clicker/clicker.component';
import { ClickerAlphaComponent } from './clicker-alpha/clicker-alpha.component';
import { DevelopmentHelperComponent } from './development-helper/development-helper.component';

@NgModule({
  declarations: [
    DevelopmentHelperComponent,
    ClickerComponent,
    ClickerAlphaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
})

export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    customElements.define('ng-clicker', createCustomElement(ClickerComponent, { injector }));
    customElements.define('ng-clicker-alpha', createCustomElement(ClickerAlphaComponent, { injector }));
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    if(environment.production) return;

    //if we are developing the app, we should bootstrap the development component so we can test and see our web-components
    appRef.bootstrap(DevelopmentHelperComponent);
  }
}
