import { Playground } from '../shared/playground';
import { Observable } from 'rxjs';
import { Marker, Center } from '../leaflet';
import { PlaygroundService } from '../shared/playground.service';
import { LocationService } from '../shared/location.service';
import { map } from 'rxjs/operators';
import { Coordinate } from '../shared/coordinate';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public playgrounds: Playground[];
  public selected: Playground;
  public markersObservable: Observable<Marker>;
  public center: Center = new Center(56.360029, 10.746635); // Center of Denmark

  constructor(
    public playgroundService: PlaygroundService,
    public locationService: LocationService
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