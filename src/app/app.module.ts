import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EmpmasterComponent } from './empmaster/empmaster.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ApprovedComponent } from './approved/approved.component';
import { AuthoriserComponent } from './authoriser/authoriser.component';
import { SecurityComponent } from './security/security.component';
import { ToapproveComponent } from './toapprove/toapprove.component';
import { ForsecurityComponent } from './forsecurity/forsecurity.component';
import { AppRoutingModule } from './/app-routing.module';
import { OpenComponent } from './open/open.component';
import { EditorComponent } from './editor/editor.component';
import {FormsModule} from '@angular/forms';

import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    EmpmasterComponent,   
    NewComponent,
    EditComponent,
    ApprovedComponent,
    AuthoriserComponent,
    SecurityComponent,
    ToapproveComponent,
    ForsecurityComponent,
    OpenComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
