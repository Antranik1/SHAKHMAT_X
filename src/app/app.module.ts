import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeAppComponent } from './welcome-app.component';
import { ModuleComponent } from './module/module.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    WelcomeAppComponent,
    ModuleComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [WelcomeAppComponent]
})
export class AppModule { }
