import { NgModule,Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDecoretorService } from './pipe-decoretor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[],
  providers: [
    PipeDecoretorService
  ],
})
export class PipeDecoretorModuleModule { 
  static injector:Injector;

  constructor(injector:Injector){
    PipeDecoretorModuleModule.injector = injector;
  }
}
