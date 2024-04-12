import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) {}

scrollByPixels(pixels: number) {
  window.scrollBy({
    top: pixels,
    behavior: 'smooth'
  });
}

}
