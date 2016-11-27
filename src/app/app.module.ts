import {NgModule}                         from '@angular/core';
import {BrowserModule}                    from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule}          from '@angular/http';
import {AUTH_PROVIDERS}                   from 'angular2-jwt';
import {MaterializeDirective}             from 'angular2-materialize';
// import {ChartsModule}                     from 'ng2-charts';
// import { ChartModule } from 'angular2-highcharts';
import {routing, routedComponents}        from './app.routing';
import {AuthService}                      from './_services/index';
import {AuthGuard}                        from './_guards/index';
import {AppComponent}                     from './app.component';
import {TRANSLATION_PROVIDERS,
        TranslatePipe, TranslateService}  from './_translate';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    MaterializeDirective,
    TranslatePipe
  ],
  providers: [
    AUTH_PROVIDERS,
    TRANSLATION_PROVIDERS,
    TranslateService,
    AuthService,
    AuthGuard
  ],
  bootstrap:  [ AppComponent ]
})

export class AppModule {
  constructor() { }
}
