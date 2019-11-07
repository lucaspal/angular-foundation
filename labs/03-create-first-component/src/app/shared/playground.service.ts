import { Observable, of } from 'rxjs';
import { catchError, publishLast, refCount, filter, map, flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Playground } from './playground';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  private request$: Observable<Playground[]>

  constructor(public httpClient: HttpClient) {
    this.request$ = httpClient.get<Playground[]>('assets/aarhus.json').pipe(
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

  public findPlayground(id: string): Observable<Playground> {
    return this.request$.pipe(
      map(playgrounds => playgrounds.find(p => p.id === id))
    )
  }
}
