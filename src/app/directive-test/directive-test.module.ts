import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { RouterModule, Routes } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { RiskComponent } from './risk/risk.component';
import { IssueComponent } from './issue/issue.component';
import { UserPlanDirective } from './directive-test.directive';
import { AuthGuardService } from './authguard.service';
import { NoAccessComponent } from './no-access/no-access.component';

const routes:Routes = [
    {
    path:'', redirectTo:'/directive/meeting',pathMatch:'full'
  },
  {
    path:'', component:ComponentComponent,
    children: [
          { path: 'meeting', component: MeetingComponent,
            canActivate: [AuthGuardService],
            data: {page: ['meeting']}
            },
          { path: 'risk', component: RiskComponent,
            canActivate: [AuthGuardService],
            data: {page: ['risk']}
           },
          { path: 'issue', component: IssueComponent,
            canActivate: [AuthGuardService],
            data: {page: ['issue']}
           },
        ]
  },
]

@NgModule({
  declarations: [
    ComponentComponent,
    MeetingComponent,
    RiskComponent,
    IssueComponent,
    UserPlanDirective,
    NoAccessComponent
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
  ],
  providers:[
    AuthGuardService
  ]
})
export class DirectiveTestModule { }
