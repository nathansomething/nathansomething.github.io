import { Component, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  root:ElementRef;

  constructor(root: ElementRef) {
    this.root = root;
  }

  public setBackground(background:string) {
    return {
      'background-image': `url("./assets/${background}")`,
      'background-repeat': 'repeat'
    }
  }

  alert_scroll($event:Event):void {
    console.log(this.root.nativeElement.childNodes[0]);
  }
}
