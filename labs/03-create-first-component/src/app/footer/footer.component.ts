import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public name: string;
  @Input() public field1?: string;
  @Input() public field2?: string;

  constructor() { }

  ngOnInit() {
  }
}
