import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeDecoretorService {
 userCredential = [
   {
   id:1,  
   name: 'Arnab Dutta',
   org: 'AD Creation',
   plan: 'Free',
   features:[
     {name:'video',visibility:true},
     {name:'game',visibility:false},
     {name:'voice',visibility:false}
   ]
   },{
   id:2,  
   name: 'Amit Dutta',
   org: 'AMit DG',
   plan: 'Gold',
   features:[
     {name:'video',visibility:true},
     {name:'game',visibility:true},
     {name:'voice',visibility:false}
   ]  
   },{
   id:3,  
   name: 'Akash',
   org: 'Aakash LTD',
   plan: 'Silver',
   features:[
     {name:'video',visibility:true},
     {name:'game',visibility:true},
     {name:'voice',visibility:true}
   ]  
   }
  ]
  

  loggedId = 1;
  public constructor( ) {
     
  }

}
