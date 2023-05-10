import { ItensReadComponent } from './itens/itens-read/itens-read.component';
// import { ItensCreateComponent } from './itens/itens-create/ItensCreateComponent';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    // ItensCreateComponent,
    ItensReadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
