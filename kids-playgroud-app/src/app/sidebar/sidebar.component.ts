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
  @Output() public onPlaygroundSelected = new EventEmitter<Playground>();
  @Input() public selectedPlayground: Playground;

  constructor() { }

  ngOnInit() {
  }

  public playgroundClicked(p: Playground): void {
    this.onPlaygroundSelected.emit(p)
  }
}
