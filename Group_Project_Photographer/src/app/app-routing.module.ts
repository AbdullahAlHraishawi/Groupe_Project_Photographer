import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AwardsComponent } from './awards/awards.component';
import { TestSwiperComponent } from './test-component/test-component.component';


const routes: Routes = [
  {
    path: '', component: TestSwiperComponent
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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
