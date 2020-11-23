import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RendererComponent } from './renderer/renderer.component';
import { RendererModule } from './renderer/renderer.module';
import { PipeDecoretorComponent } from './pipe-decoretor-test/pipe-decoretor/pipe-decoretor.component';
import { PipeDecoretorService } from './pipe-decoretor-test/pipe-decoretor.service';
import { PipeDecoretorModuleModule } from './pipe-decoretor-test/pipe-decoretor-module.module';
import { TestPipe } from './pipe-decoretor-test/pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    PipeDecoretorComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RendererModule,
    PipeDecoretorModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
