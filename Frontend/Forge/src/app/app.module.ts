import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LangingPageComponent,
    LandingPageHeaderComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
