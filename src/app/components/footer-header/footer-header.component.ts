import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'footer-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './footer-header.component.html',
  styleUrl: './footer-header.component.css'
})
export class FooterHeaderComponent {

}
