import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MajorPageComponent } from './major-page/major-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink, NewsletterComponent, MajorPageComponent, AboutPageComponent, ServicePageComponent, PromotionsPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'magic-D';
}
