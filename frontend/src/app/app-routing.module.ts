import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'dashboard',
    component: DevicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
