import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterLoginComponent },
{ path: 'login', component: RegisterLoginComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'donate', component: DonateComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
