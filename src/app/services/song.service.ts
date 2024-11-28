import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/Song';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private urlApi: string = 'http://localhost:3000/songs';
  private http = inject(HttpClient);

  constructor() {}
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.urlApi);
  }
}
