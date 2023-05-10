import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CoreModule } from "../../core/core.module";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    MatCardModule,
    RouterModule,
    MatSidenavModule
  ]
})
export class HomeModule { }
