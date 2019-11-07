import { Playground } from '../shared/playground';
import { Observable } from 'rxjs';
import { Marker, Center } from '../leaflet';
import { PlaygroundService } from '../shared/playground.service';
import { LocationService } from '../shared/location.service';
import { map, switchMap, shareReplay, pluck, filter, merge } from 'rxjs/operators';
import { Coordinate } from '../shared/coordinate';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public playgrounds: Playground[];
  public selectedPlayground: Playground;
  public markers$: Observable<Marker>;
  public center: Center = new Center(56.360029, 10.746635); // Center of Denmark

  constructor(
    public playgroundService: PlaygroundService,
    public locationService: LocationService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
  }

  public ngOnInit() {
    this.playgroundService.getPlaygrounds().subscribe((playgrounds: Playground[]) => {
      this.playgrounds = playgrounds;
    });

    const playground$ = this.route.params.pipe(
      pluck<Params, string>('id'),
      filter(id => !!id),
      switchMap(id => this.playgroundService.findPlayground(id)),
      filter(playground => !!playground),
      shareReplay(),
    )

    playground$.subscribe(playground => {
      this.selectedPlayground = playground;
      this.center = new Center(playground.position.lat, playground.position.lng, 12);
    });
    this.markers$ = this.locationService.current.pipe(
      map(location => new Marker('me', location.lat, location.lng)),
      merge(playground$.pipe(map(p => new Marker('playground', p.position.lat, p.position.lng)))),
    );
  }

  public updateSelectedPlayground(playground: Playground): void {
    this.router.navigate(['', playground.id]);
  }

  public getSelectedName(): string {
    return this.selectedPlayground ? this.selectedPlayground.name : null;
  }
}