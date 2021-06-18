import { Component } from '@angular/core';
import { NgsRevealModule } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealModule] // add NgsRevealConfig to the component providers
})
export class AppComponent {
  title = 'fishingStudy-App';
}
