import { Observable } from 'rxjs';
import { PlaygroundService } from './shared/playground.service';
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

  constructor(public playgroundService: PlaygroundService) {
  }

  public ngOnInit() {
    this.playgroundService.getPlaygrounds().subscribe((playgrounds: Playground[]) => {
      this.playgrounds = playgrounds;
    });
  }

  public updateSelectedPlayground(p: Playground): void {
    this.selected = p;
  }

  public getSelectedName(): string {
    return this.selected ? this.selected.name : null;
  }
}
