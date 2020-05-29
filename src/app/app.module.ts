import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { APP_INTERCEPTORS } from './interceptors/interceptors';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { FileEventsDirective } from './directives/file-events.directive';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { NavigateComponent } from './navigate/navigate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { CarouselComponent } from './common/components/carousel/carousel.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { PhotoVideoGalleryComponent } from './common/components/photo-video-gallery/photo-video-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterLoginComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    DonateComponent,
    ProfileComponent,
    AddressComponent,
    FileEventsDirective,
    UserDashboardComponent,
    ResourceNotFoundComponent,
    NavigateComponent,
    DashboardComponent,
    UserComponent,
    AdminComponent,
    AdminDashboardComponent,
    ChartsComponent,
    CarouselComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    RecentActivitiesComponent,
    PhotoVideoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APP_INTERCEPTORS],
  bootstrap: [AppComponent]
})
export class AppModule { }
