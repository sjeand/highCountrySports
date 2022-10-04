import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Announcement } from './announcement';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private httpClient: HttpClient ) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>('/announcements').pipe(map((obj: any) => obj.announcements));
  }

  createAnnouncement(announcement: Announcement) {
    return this.httpClient.post<Announcement>("/announcements", announcement);
  }

 /*  uploadFile(file: File){
    const formData = new FormData();
    formData.append("thumbnail", file)
    return this.httpClient.post("/file-upload", formData);
  } */
}
