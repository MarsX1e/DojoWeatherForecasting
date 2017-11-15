import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SeattleComponent } from './index/seattle/seattle.component';
import { SanJoseComponent } from './index/san-jose/san-jose.component';
import { BurbankComponent } from './index/burbank/burbank.component';
import { DallasComponent } from './index/dallas/dallas.component';
import { WashingtonComponent } from './index/washington/washington.component';
import { ChicagoComponent } from './index/chicago/chicago.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
