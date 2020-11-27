import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RendererComponent } from './renderer/renderer.component';
import { RendererModule } from './renderer/renderer.module';
import { PipeDecoretorModuleModule } from './pipe-decoretor-test/pipe-decoretor-module.module';
import { TestPipe } from './pipe-decoretor-test/pipe.pipe';
import { PipeDecoretorComponent } from './pipe-decoretor-test/pipe-decoretor/pipe-decoretor.component';
import { DirectiveTestModule } from './directive-test/directive-test.module';
import { UserPlanDirective } from './directive-test/directive-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    PipeDecoretorComponent,
    TestPipe, //import pipe 
    //UserPlanDirective, // directive import
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RendererModule,
    PipeDecoretorModuleModule,
    DirectiveTestModule,
  ],
  exports:[
   // UserPlanDirective
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponent: [PipeDecoretorComponent]
})
export class AppModule { }
