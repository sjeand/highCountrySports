import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Gunshow } from './gunshows';


@Injectable({
  providedIn: 'root'
})
export class GunshowsService {

  constructor(private httpClient: HttpClient ) { }

  getGunshows(): Observable<Gunshow[]> {
    return this.httpClient.get<Gunshow[]>('/gunshows-list').pipe(map((obj: any) => obj.gunshows));

  }

  createGunshow(gunshow: Gunshow) {
    return this.httpClient.post<Gunshow>("/gunshows-list",  gunshow);
  }
}
