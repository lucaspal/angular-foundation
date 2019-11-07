import { Observable, of } from 'rxjs';
import {catchError, publishLast, refCount} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Playground } from './playground';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  private request$: Observable<Playground[]>

  constructor(public httpClient: HttpClient) { 
    this.request$ = httpClient.get<Playground[]>('assets/copenhagen.json').pipe(
      catchError((error: Response) => {
        console.error('Unable to fetch playgrounds', error.statusText);
        return of([]);
      }),
      publishLast(),
      refCount()
    );
  }

  public getPlaygrounds(): Observable<Playground[]> {
    return this.request$;
  }
}
