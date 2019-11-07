import { Marker } from './leaflet/marker';
import { map } from 'rxjs/operators';
import { Center } from './leaflet/center';
import { Coordinate } from './shared/coordinate';
import { LocationService } from './shared/location.service';
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
  public markersObservable: Observable<Marker>;
  public center: Center = new Center(56.360029, 10.746635);

  constructor(
    public playgroundService: PlaygroundService,
    public locationService: LocationService,
  ) {
  }

  public ngOnInit() {
    this.playgroundService.getPlaygrounds().subscribe((playgrounds: Playground[]) => {
      this.playgrounds = playgrounds;
    });
    this.markersObservable = this.locationService.current.pipe(
      map((location: Coordinate) => new Marker('myLocation', location.lat, location.lng)))
  }

  public updateSelectedPlayground(p: Playground): void {
    this.selected = p;
  }

  public getSelectedName(): string {
    return this.selected ? this.selected.name : null;
  }
}
