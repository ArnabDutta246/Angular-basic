import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectiveTestService {
userCredential = [
   {
   id:1,  
   name: 'Arnab Dutta',
   org: 'AD Creation',
   plan: 'Free',
   services:[
     {name:'meeting',visibility:true},
     {name:'risk',visibility:false},
     {name:'issue',visibility:false},
   ],
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
   services:[
     {name:'meeting',visibility:true},
     {name:'risk',visibility:true},
     {name:'issue',visibility:false},
   ],
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
   services:[
     {name:'meeting',visibility:true},
     {name:'risk',visibility:true},
     {name:'issue',visibility:true},
   ],
   features:[
     {name:'video',visibility:true},
     {name:'game',visibility:true},
     {name:'voice',visibility:true}
   ]  
   }
  ]
  

  loggedId = 1;
  public constructor( ) {}

  hasAccessOnPage(servicePage:any){
    return new Promise((res,rej)=>{
    let asscessAllow:any = false;
    if(this.userCredential[this.loggedId].services.map(function(d){
          if(d.name == servicePage) asscessAllow = d.visibility;
        }.bind(this)
      )
    )
    return res(asscessAllow); 
    }
    )
  }
}
