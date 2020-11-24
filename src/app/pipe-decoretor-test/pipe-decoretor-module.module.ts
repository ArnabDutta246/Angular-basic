import { NgModule,Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDecoretorService } from './pipe-decoretor.service';
import { PipeDecoretorComponent } from './pipe-decoretor/pipe-decoretor.component';
import { RouterModule, Routes } from '@angular/router';

// const routes:Routes = [
//   {path:'',component:PipeDecoretorComponent}
// ]

@NgModule({
  declarations: [
    //PipeDecoretorComponent
  ],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes)
  ],
  exports:[
    //PipeDecoretorComponent
  ],
  providers: [
    //PipeDecoretorService
  ],
})
export class PipeDecoretorModuleModule { 
  static injector:Injector;

  constructor(injector:Injector){
    PipeDecoretorModuleModule.injector = injector;
  }
}
