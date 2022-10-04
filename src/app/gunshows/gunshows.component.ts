import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gunshow } from '../gunshows';
import { GunshowsService } from '../gunshows.service';

@Component({
  selector: 'app-gunshows',
  templateUrl: './gunshows.component.html',
  styleUrls: ['./gunshows.component.scss']
})
export class GunshowsComponent implements OnInit {

  gunshows: Gunshow[] = [];

  constructor(public dialog: MatDialog, private gunshowsService: GunshowsService) {
   }

  ngOnInit(): void {
    this.gunshowsService.getGunshows().subscribe((gunshows: Gunshow[]) => {
      this.gunshows = gunshows;
    })
  }


}
