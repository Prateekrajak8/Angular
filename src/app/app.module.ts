import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import{ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component'
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  exports:[NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
