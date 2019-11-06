import { Playground } from './../shared/playground';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() public playgrounds: Playground[];
  @Output() public selectedPlayground = new EventEmitter<Playground>();

  constructor() { }

  ngOnInit() {
  }

  public selectPlayground(p: Playground): void {
    this.selectedPlayground.emit(p)
  }
}
