import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmetComponent } from './emet/emet.component';
import { VariablesComponent } from './variables/variables.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmetComponent,
    VariablesComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
