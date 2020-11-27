import { Component, OnInit } from '@angular/core';
import { DirectiveTestService } from '../directive-test.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  session:any = null;
  constructor(private testService:DirectiveTestService) { }

  ngOnInit() { 
   this.session = this.testService.userCredential[this.testService.loggedId];

   //console.log(this.session);
  }

}
