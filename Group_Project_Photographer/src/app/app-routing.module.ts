import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"contact-register", component: ContactRegisterComponent,
  },{
    path:"",component: HomeComponent,
  },{
    path:"bio-about", component: BioAboutComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
