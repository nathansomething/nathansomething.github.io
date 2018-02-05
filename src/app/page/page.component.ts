import { Component, OnInit, Input, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PageComponent implements OnInit {

  @Input() title:string;
  @Input() backgroundImage:string;
  @Input() backgroundCover:string;
  @Input() backgroundColor:string;
  @Input() textColor:string;
  private background_image:string;
  private background_size:string;
  private background_color:string;
  private header_color:string;
  private body_color:string;

  constructor() { }

  ngOnInit() {

    this.background_image = `url('./assets/${this.backgroundImage}')`
    this.background_color = this.backgroundColor

    if (this.backgroundCover) {
      if (this.backgroundCover.toLowerCase() == "true") {
        this.background_size = "Cover"
      }
    }
    else {
      this.background_size = "auto auto"
    }

    if (this.textColor == "light") {
      this.header_color = '#FFF'
      this.body_color = '#FFF'
    }
    else {
      this.header_color = '#000'
      this.body_color = '#000'
    }
  }

  @HostListener('scroll') onKeypress() {
    console.log('hi')
  }
}
