import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    LoginComponent,
    SignupComponent,
    ReportsComponent,
    LateralMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
