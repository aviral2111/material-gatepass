import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApprovedComponent } from './approved/approved.component';
import { AuthoriserComponent } from './authoriser/authoriser.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { EditorComponent } from './editor/editor.component';
import { EmpmasterComponent } from './empmaster/empmaster.component';
import { ForsecurityComponent } from './forsecurity/forsecurity.component';
import { HomeComponent } from './home/home.component';
import { OpenComponent } from './open/open.component';
import { NewComponent } from './new/new.component';
import { RegisterComponent } from './register/register.component';
import { SecurityComponent } from './security/security.component';
import { ToapproveComponent } from './toapprove/toapprove.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: OpenComponent},    
  {path: 'login', component: LoginComponent},  
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'approved', component: ApprovedComponent},
  //{path: 'authoriser', component: AuthoriserComponent},
  {path: 'authoriser/:slno', component: AuthoriserComponent},
  {path: 'open', component: OpenComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'edit', component: EditComponent},
  // {path: 'editor', component: EditorComponent},
  {path: 'editor/:slno', component: EditorComponent},
  {path: 'empmaster', component: EmpmasterComponent},
  {path: 'forsecurity', component: ForsecurityComponent},  
  {path: 'registercomponent', component: RegisterComponent},
  {path: 'new', component: NewComponent},  
  // {path: 'security', component: SecurityComponent},
  {path: 'security/:slno', component: SecurityComponent},
  {path: 'toapprove', component: ToapproveComponent},  
  {path: 'about', component: AboutComponent},  

];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
