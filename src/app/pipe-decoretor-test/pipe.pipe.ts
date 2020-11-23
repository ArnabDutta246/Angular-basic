import {PipeTransform,Pipe} from '@angular/core';

@Pipe({
  name:'testpipe'
})

export class TestPipe implements PipeTransform{
  transform(value:any){
    return value['visibility'];
  }
}