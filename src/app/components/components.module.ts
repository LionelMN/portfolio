import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StackComponent } from './stack/stack.component';
import { WorksComponent } from './works/works.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IndividualWorkComponent } from './individual-work/individual-work.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    StackComponent,
    WorksComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    IndividualWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    StackComponent,
    WorksComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    IndividualWorkComponent
  ]
})
export class ComponentsModule { }
