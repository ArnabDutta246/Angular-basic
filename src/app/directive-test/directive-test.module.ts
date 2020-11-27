import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { RouterModule, Routes } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { RiskComponent } from './risk/risk.component';
import { IssueComponent } from './issue/issue.component';
import { UserPlanDirective } from './directive-test.directive';

const routes:Routes = [
    {
    path:'', redirectTo:'/meeting',pathMatch:'full'
  },
  {
    path:'', component:ComponentComponent,
    children: [
          { path: 'meeting', component: MeetingComponent },
          { path: 'risk', component: RiskComponent },
          { path: 'issue', component: IssueComponent },
        ]
  },
]

@NgModule({
  declarations: [
    ComponentComponent,
    MeetingComponent,
    RiskComponent,
    IssueComponent,
    UserPlanDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ComponentComponent,
    MeetingComponent,
    RiskComponent,
    IssueComponent, 
    RouterModule,
    UserPlanDirective 
  ]
})
export class DirectiveTestModule { }
