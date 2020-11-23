import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PipeDecorator } from '../pipe-decoretor.decoretor';
import { PipeDecoretorService } from '../pipe-decoretor.service';

// function log(target,name,decriptor){
//   // initialize
//   let original = decriptor.value;
//   // modify here
//   decriptor.value = function(...arg){
//    console.log("the original value is....",original.apply(arg));
//   } 
//   //return decorator result
//   return decriptor;
// }

@Component({
  selector: 'app-pipe-decoretor',
  templateUrl: './pipe-decoretor.component.html',
  styleUrls: ['./pipe-decoretor.component.scss']
})
export class PipeDecoretorComponent implements OnInit {
   @PipeDecorator()
   response: Observable<any> = new Observable<any>();
   
  session:any;
  
  constructor(private userDataService:PipeDecoretorService) {

    // this.isCredantial(this.userDataService.userCredential);
    // console.log("in constructor",this.userDataService.userCredential);
   }

  ngOnInit() {
    this.session = this.userDataService.userCredential[this.userDataService.loggedId];
    console.log('this session data..',this.session) 
  }

  // @log
  // isCredantial(...arg){
  //   console.log("decoretor is calling");
  // }

 

}
