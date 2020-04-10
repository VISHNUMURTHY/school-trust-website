import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './service/auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterLoginComponent },
{ path: 'login', component: RegisterLoginComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'donate', component: DonateComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: UserComponent },
{ path: 'user-dashboard', component: UserDashboardComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'admin-dashboard', component: AdminDashboardComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: ResourceNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
