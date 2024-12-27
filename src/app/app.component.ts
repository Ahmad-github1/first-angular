import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstCompComponent, AboutComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-task';
}
