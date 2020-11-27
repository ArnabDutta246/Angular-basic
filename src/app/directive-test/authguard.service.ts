import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { DirectiveTestService } from "./directive-test.service";
@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private testService: DirectiveTestService, private router: Router) {}
  //canActivated route configure
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let data = route.data.page as Array<string>;
    console.log("data pass in canactivate route", data);
    return this.testService.hasAccessOnPage(data).then((res) => {
      if (res) {
        return true;
      } else {
        this.router.navigate(["/no-access"]);
        return true;
      }
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
