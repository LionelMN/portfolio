import { Component } from '@angular/core';
import { WorksI } from './interfaces/works-i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAngular';
  work: WorksI;
  a = false;
}

