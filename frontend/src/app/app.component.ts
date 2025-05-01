// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TravelEntryComponent } from './travel-entry/travel-entry.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,TravelEntryComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'frontend';
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TravelEntryComponent } from './travel-entry/travel-entry.component';

@Component({
  selector: 'app-root',
  standalone: true,  // You can keep this if using standalone components
  imports: [RouterOutlet, TravelEntryComponent],  // Import TravelEntryComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
