import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AwardsComponent } from './awards/awards.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    FooterComponent,
    BioAboutComponent,
    PortofolioComponent,
    AwardsComponent,
    TestimonialsComponent,
    ContactRegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
