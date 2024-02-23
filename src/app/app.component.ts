import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './test/test.component.html',
  styleUrl: './test/test.component.scss'
})


export class AppComponent {
  title = 'LpNg';

  constructor(private router: Router) { }

  entrarSite() {
    console.log("Navegando para a rota...");
    this.router.navigate(['/src/app/landing/landing.component.html']);
  }
}
