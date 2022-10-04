import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISlide } from '../slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() public slides: ISlide[] = [];
  @Input() public slideIndex = 1;
  @Output() public slideClick = new EventEmitter();
  @Output() public slideShow = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  public plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  // Thumbnail image controls
  public currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  public showSlides(n: number) {
    // We need to adjust the index if we have gone off either end
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slideShow.emit(this.slideIndex);
  }
}
