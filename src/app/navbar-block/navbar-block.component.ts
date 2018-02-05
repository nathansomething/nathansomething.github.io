import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollInstance, PageScrollService, EasingLogic } from 'ng2-page-scroll';

@Component({
  selector: 'navbar-block',
  templateUrl: './navbar-block.component.html',
  styleUrls: ['./navbar-block.component.scss'],
  providers: [PageScrollService]
})
export class NavbarBlockComponent implements OnInit {

  github_img:string;
  linkedin_img:string;
  stackoverflow_img:string;
  nav_items:Array<string>;
  active_item:number;

  constructor(@Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService) {
    this.github_img = './assets/icons/GitHub-Mark-Light-32px.png';
    this.linkedin_img = './assets/icons/In-White-34px-R.png';
    this.stackoverflow_img = './assets/icons/Stackoverflow.png';
    this.nav_items = ["About Me",
                      "Professional Experience",
                      "Skills",
                      "Projects",
                      "Courses",
                      "Contact"];
    this.active_item = -1;

  }

  public setActive(nav_item:string, index:number) {
    this.active_item = index;
  }

  public goToLastHeading() {
  let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head15');
  this.pageScrollService.start(pageScrollInstance);
}

public myEasing: EasingLogic = {
  ease: (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
};

public doSmth(reachedTarget: boolean) {
  let text: string;
  if (reachedTarget) {
    text = 'Yeah, we reached our destination';
  } else {
    text = 'Ohoh, something interrupted us';
  }
  alert(text);
}

  // public goToLastHeading() {
  //   console.log("in last hedding");
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#aboutme');
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  ngOnInit() {
    console.log('navbar loaded');
  }

}
