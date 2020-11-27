import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { PipeDecoretorComponent } from '../pipe-decoretor-test/pipe-decoretor/pipe-decoretor.component';

const routes:Routes = [
  {
     path:'',redirectTo:'directive',pathMatch:'full'
  },
  {
    path:'renderer',loadChildren:'../renderer/renderer.module#RendererModule'
  },
  // {
  //   path:'test',loadChildren:'../pipe-decoretor-test/pipe-decoretor-module.module#PipeDecoretorModuleModule'
  // },
    {
    path:'directive',loadChildren:'../directive-test/directive-test.module#DirectiveTestModule'
    },
    {
    path:'test',component:PipeDecoretorComponent
  },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
