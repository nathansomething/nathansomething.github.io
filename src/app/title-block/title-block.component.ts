import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.scss']
})
export class TitleBlockComponent implements OnInit {

  @Input() header:string;
  @Input() subHeader:string;

  constructor() { }

  ngOnInit() {

  }

}
