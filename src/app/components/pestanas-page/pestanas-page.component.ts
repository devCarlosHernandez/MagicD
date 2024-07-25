import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pestanas-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink],
  templateUrl: './pestanas-page.component.html',
  styleUrl: './pestanas-page.component.css'
})
export class PestanasPageComponent {

}
