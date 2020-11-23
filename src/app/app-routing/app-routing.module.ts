import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { PipeDecoretorComponent } from '../pipe-decoretor-test/pipe-decoretor/pipe-decoretor.component';

const routes:Routes = [
  {
     path:'',redirectTo:'test',pathMatch:'full'
  },
  {
    path:'renderer',loadChildren:'../renderer/renderer.module#RendererModule'
  },
  {
    path:'test',component:PipeDecoretorComponent
  }
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
