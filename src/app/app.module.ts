import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

import { HomeComponent } from './home/home.component';

import { SharedModule } from 'src/app/shared/shared.module';

const appRoute : Routes =[
  {path:'Home',component:HomeComponent},
  {path:'',component:AppComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule, 
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
