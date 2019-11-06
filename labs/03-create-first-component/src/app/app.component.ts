import { MOCK_PLAYGROUNDS } from './shared/mock-playgrounds';
import { Playground } from './shared/playground';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public playgrounds: Playground[];
  public selected: Playground;

  constructor() {  
  }

  public ngOnInit() {
    this.playgrounds = MOCK_PLAYGROUNDS;
  }

  public updateSelectedPlayground(p: Playground): void {
    this.selected = p;
  }
}
