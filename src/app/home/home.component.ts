import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  announcements: Announcement[] =[];

  constructor(private announcementService: AnnouncementService) {
   }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements
     })
  }

}
