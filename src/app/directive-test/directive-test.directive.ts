import { Directive, OnInit, Input, ElementRef, Renderer2, OnChanges, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DirectiveTestService } from './directive-test.service';

const DISABLED = 'disabled';
const APP_DISABLED = 'app-disabled';
const TAB_INDEX = 'tabindex';
const TAG_ANCHOR = 'a';

@Directive({ selector: '[userPlanService]'})
export class UserPlanDirective implements OnInit,OnChanges, AfterViewInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private authService: DirectiveTestService,
        private viewContainer: ViewContainerRef,
        private eleRef: ElementRef,
        private renderer: Renderer2
    ) { }

    appDisable  = true;
    
    @Input() 
    set userPlanService(services:any) {
        console.log('directive working',services);
        let hasAccess = false;
        let servicesAll = this.authService.userCredential[this.authService.loggedId].services;
        servicesAll.map(function(d){if(d.name == services) hasAccess = d.visibility});
        this.appDisable = hasAccess;
        console.log(hasAccess);
        if (hasAccess) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
         this.viewContainer.clear();
        }
         // this.disableElement(this.eleRef.nativeElement);
    }
   // @Input() userPlanService:any;
    ngOnInit() {
    }
    ngOnChanges() {
    // console.log('directive working',this.userPlanService);
    // let hasAccess = false;
    // let servicesAll = this.authService.userCredential[this.authService.loggedId].services;
    // servicesAll.map(function(d){if(d.name == this.userPlanService) hasAccess = d.visibility}.bind(this));
    // this.appDisable = hasAccess;
    // console.log(hasAccess);  
    // this.disableElement(this.eleRef.nativeElement);
  }

    ngAfterViewInit() {
      //this.disableElement(this.eleRef.nativeElement);
    }

  // private disableElement(element: any) {
  //   console.log("the state we get",this.appDisable);
  //   console.log("the element",element)
  //   if (this.appDisable) {
  //     if (!element.hasAttribute(DISABLED)) {
  //       this.renderer.setAttribute(element, APP_DISABLED, '');
  //       this.renderer.setAttribute(element, DISABLED, 'true');

  //       // disabling anchor tab keyboard event
  //       if (element.tagName.toLowerCase() === TAG_ANCHOR) {
  //         this.renderer.setAttribute(element, TAB_INDEX, '-1');
  //       }
  //     }
  //   } else {
  //     if (element.hasAttribute(APP_DISABLED)) {
  //       if (element.getAttribute('disabled') !== '') {
  //         element.removeAttribute(DISABLED);
  //       }
  //       element.removeAttribute(APP_DISABLED);
  //       if (element.tagName.toLowerCase() === TAG_ANCHOR) {
  //         element.removeAttribute(TAB_INDEX);
  //       }
  //     }
  //   }
  //   if (element.children) {
  //     for (let ele of element.children) {
  //       this.disableElement(ele);
  //     }
  //   }
  // }
}