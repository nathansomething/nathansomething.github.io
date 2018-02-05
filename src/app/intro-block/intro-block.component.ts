import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.scss']
})
export class IntroBlockComponent implements OnInit {

  private background_image:string;

  constructor() {
    this.background_image = "url('./assets/background2.jpg')";
  }

  ngOnInit() {
    // console.log(this.location);
    console.log('title block loaded');
  }

}
