import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [


  {
    path: "testimonials", component: TestimonialsComponent


  }
];
=======
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },{
    path:"bio-about", component: BioAboutComponent,
  },{
    path: 'portofolio', component: PortofolioComponent
  }, {
    path: "contact-register", component: ContactRegisterComponent,
  }];
>>>>>>> 328bba2a29dc80d5a1765d50f8ef3985acc07922

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
