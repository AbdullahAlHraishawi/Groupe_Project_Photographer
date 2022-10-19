import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AwardsComponent } from './awards/awards.component';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: "bio-about", component: BioAboutComponent
  }, {
    path: 'portofolio', component: PortofolioComponent
  }, {
    path: "contact-register", component: ContactRegisterComponent
  }, {
    path: "testimonials", component: TestimonialsComponent
  }, {
    path: "awards", component: AwardsComponent
  },{
  path: "experience",component: ExperienceComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
