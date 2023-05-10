import { InicioComponent } from './../../views/inicio/inicio.component';
import { ItensCrudComponent } from './../../views/itens-crud/itens-crud.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'itens',
        component: ItensCrudComponent
      },
      {
        path: 'estoque',
        component: ItensCrudComponent
      }

    ]
  },
  // {
  //   path: 'itens/create',
  //   component: ItensCreateComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
