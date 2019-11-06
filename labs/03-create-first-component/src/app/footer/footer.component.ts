import { Coordinate } from './../shared/coordinate';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() public name: string;
  @Input() public position: Coordinate
  @Input() public field1?: string;
  @Input() public field2?: string;

  constructor() { }

  ngOnInit() {
  }

  public getMapsLink(): string {
    return `https://www.google.com/maps/search/?api=1&query=${this.position.lat},${this.position.lng}`;
  }
}
