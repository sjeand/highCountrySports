import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnouncementComponent implements OnInit {

  @Input() announcement!: Announcement;
  admin = true;

  constructor(private announcementService: AnnouncementService) {
    this.announcement = {
      title: '',
      subtitle: '',
      text: '',
      image: ''
    }
   }

  ngOnInit(): void {
  }

  deleteAnnouncement(){};
}
