import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { WarningComponent } from './WarningFolder/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
