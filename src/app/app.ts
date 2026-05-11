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
  template: `<router-outlet></router-outlet>`,
  styles: [`:host { display: block; min-height: 100vh; }`]
})
export class AppComponent {
  title = 'OpenBankX';
}
