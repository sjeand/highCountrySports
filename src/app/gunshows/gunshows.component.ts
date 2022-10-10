import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gunshow } from '../gunshows';
import { GunshowsService } from '../services/gunshows.service';


@Component({
  selector: 'app-gunshows',
  templateUrl: './gunshows.component.html',
  styleUrls: ['./gunshows.component.scss']
})
export class GunshowsComponent implements OnInit {

  gunshows: Gunshow[] = [];
  admin = true;

  constructor(public dialog: MatDialog, private gunshowsService: GunshowsService) {
  }

  ngOnInit(): void {
    this.gunshowsService.getGunshows().subscribe((gunshows: Gunshow[]) => {
      this.gunshows = gunshows;
    })
  }

  deleteGunshow(gunshow: Gunshow) {
    this.gunshowsService.deleteGunshow(gunshow).subscribe((response: any) => {
      const index = this.gunshows.findIndex(each => each._id === gunshow._id);
      if(index > -1){
      this.gunshows.splice(index, 1);
      }
      console.log(response);
    },
    err => {
      console.log(err);
    })
    this.ngOnInit();
  };

}
