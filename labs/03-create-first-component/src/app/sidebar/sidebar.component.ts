import { Playground } from './../shared/playground';
import { MOCK_PLAYGROUNDS } from './../shared/mock-playgrounds';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public playgrounds: Playground[];

  constructor() { }

  ngOnInit() {
    this.playgrounds = MOCK_PLAYGROUNDS;
  }

}
