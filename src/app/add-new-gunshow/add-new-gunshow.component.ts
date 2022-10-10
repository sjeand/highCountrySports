import { Component, OnInit } from '@angular/core';
import { Gunshow } from '../gunshows';
import { GunshowsService } from '../services/gunshows.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-gunshow',
  templateUrl: './add-new-gunshow.component.html',
  styleUrls: ['./add-new-gunshow.component.scss']
})
export class AddNewGunshowComponent implements OnInit {

  gunshow: Gunshow = {
    name: '',
    location: '',
    when: ''
  };

  constructor(
    private gunshowsService: GunshowsService,
    private snackBar: MatSnackBar) { }


  addGunshow() {
    this.gunshowsService.createGunshow(this.gunshow).subscribe((response) => {
      this.snackBar.open('Gunshow has been added!')
    });
  }

  ngOnInit(): void {
  }

}
