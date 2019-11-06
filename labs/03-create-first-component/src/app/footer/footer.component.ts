import { Playground } from './../shared/playground';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public value: Playground;

  constructor() { }

  ngOnInit() {
  }
}
