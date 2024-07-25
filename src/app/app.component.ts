import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterHeaderComponent } from './components/footer-header/footer-header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, NavHeaderComponent, FooterHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magic-d';
}
