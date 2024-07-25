import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'uñas-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink],
  templateUrl: './unas-page.component.html',
  styleUrl: './unas-page.component.css'
})
export class UnasPageComponent {

}
