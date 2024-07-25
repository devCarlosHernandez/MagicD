import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'major-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './major-page.component.html',
  styleUrl: './major-page.component.css'
})
export class MajorPageComponent {

}
