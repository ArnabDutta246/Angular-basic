import { Type } from '@angular/core';
import { PipeDecoretorModuleModule } from './pipe-decoretor-module.module'
import { PipeDecoretorService } from './pipe-decoretor.service'

export function PipeDecorator(){
  return function (target:Object, key:string | symbol){

    console.log("decoretor is working");

    // const service = PipeDecoretorModuleModule.injector
    // .get<PipeDecoretorService>(PipeDecoretorService as Type<PipeDecoretorService>);

    // console.log(service.userCredential);

    // Object.defineProperty(target,key,{
    //   configurable:false,
    //   enumerable:false,
    //   get:() =>{
    //     console.log(service.userCredential);
    //     return service.userCredential;
    //   },
    //   set:()=>{
    //     console.log(service.userCredential);
    //     return service.userCredential;
    //   }
    // })
    return null;
  }
}