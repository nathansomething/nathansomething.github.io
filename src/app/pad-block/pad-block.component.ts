import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pad-block',
  templateUrl: './pad-block.component.html',
  styleUrls: ['./pad-block.component.scss']
})
export class PadBlockComponent implements OnInit {

  @Input('date') date:string;
  @Input('image-url') image_url:string;
  
  constructor() { }

  ngOnInit() {

  }

}
