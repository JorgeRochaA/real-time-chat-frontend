import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoggedGuard } from './auth/logged.guard';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './views/register/register.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
