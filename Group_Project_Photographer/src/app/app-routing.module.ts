import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  {
      path: '', component: HomeComponent,
  },{
      path:'portofolio', component: PortofolioComponent
  },{
    path:"contact-register", component: ContactRegisterComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
