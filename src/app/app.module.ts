import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RabbitComponent } from './comps/rabbit/rabbit.component';
import { H1rabbitComponent } from './comps/rabbit/h1rabbit/h1rabbit.component';
import { UlrabbitComponent } from './comps/rabbit/ulrabbit/ulrabbit.component';
import { FooterrabbitComponent } from './comps/rabbit/footerrabbit/footerrabbit.component';
import { TigerComponent } from './comps/tiger/tiger.component';
import { H1tigerComponent } from './comps/tiger/h1tiger/h1tiger.component';
import { UltigerComponent } from './comps/tiger/ultiger/ultiger.component';
import { FootertigerComponent } from './comps/tiger/footertiger/footertiger.component';
import { JirrafComponent } from './comps/jirraf/jirraf.component';
import { H1jirrafComponent } from './comps/jirraf/h1jirraf/h1jirraf.component';
import { UljirrafComponent } from './comps/jirraf/uljirraf/uljirraf.component';
import { FooterjirrafComponent } from './comps/jirraf/footerjirraf/footerjirraf.component';

@NgModule({
  declarations: [
    AppComponent,
    RabbitComponent,
    H1rabbitComponent,
    UlrabbitComponent,
    FooterrabbitComponent,
    TigerComponent,
    H1tigerComponent,
    UltigerComponent,
    FootertigerComponent,
    JirrafComponent,
    H1jirrafComponent,
    UljirrafComponent,
    FooterjirrafComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
