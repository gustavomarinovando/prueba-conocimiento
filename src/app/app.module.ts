import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DoctorItemComponent } from './components/doctor-item/doctor-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddReservaComponent } from './components/add-reserva/add-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    DoctorsComponent,
    DoctorItemComponent,
    AddReservaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
