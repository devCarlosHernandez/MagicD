import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NewsletterComponent } from '../home-page/newsletter/newsletter.component';

@Component({
  selector: 'app-contactanos-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink, NewsletterComponent],
  templateUrl: './contactanos-page.component.html',
  styleUrl: './contactanos-page.component.css'
})
export class ContactanosPageComponent {

}
