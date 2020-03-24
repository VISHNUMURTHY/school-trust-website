import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard} from './service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegisterLoginComponent } from './register-login/register-login.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterLoginComponent },
{ path: 'login', component: RegisterLoginComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
