import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-midle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './midle.component.html',
  styleUrl: './midle.component.scss'
})
export class MidleComponent {
  public selectedSlide = 1;
  constructor() {}

  swipeL() {
    this.selectedSlide--
    if (this.selectedSlide == 0) {
      this.selectedSlide = 3
    }
  }
  swipeR(){
    this.selectedSlide++
    if (this.selectedSlide == 4){
      this.selectedSlide = 1
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
