import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * AppComponent — The root component.
 * Simply renders the <router-outlet> which displays the current route's component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'OpenBankX';
}
