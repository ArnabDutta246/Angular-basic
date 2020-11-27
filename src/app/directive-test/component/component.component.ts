import { Component, OnInit } from '@angular/core';
import { DirectiveTestService } from '../directive-test.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  session:any = null;
  constructor(private testService:DirectiveTestService) { }

  ngOnInit() { 
   this.session = this.testService.userCredential[this.testService.loggedId];

   //console.log(this.session);
  }

}
