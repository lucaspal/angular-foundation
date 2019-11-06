import { MOCK_PLAYGROUNDS } from './shared/mock-playgrounds';
import { Playground } from './shared/playground';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'It totally works!';
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

  public getSelectedName(): string | null {
    return this.selected ? this.selected.name : null;
  }

  public getMapsLink(): string | null {
    if (this.selected === undefined) {
      return null;
    }
    const lat = this.selected.position.lat;
    const lng = this.selected.position.lng;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  }
}
