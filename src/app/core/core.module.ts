import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItensCrudComponent } from './../views/itens-crud/itens-crud.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InicioComponent } from '../views/inicio/inicio.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    ItensCrudComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
  ],
  exports: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class CoreModule { }
