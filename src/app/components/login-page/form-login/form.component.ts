import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormCreateComponent } from '../form-create/form-create.component';
import { CommonModule } from '@angular/common';
import { ResetPasswordPageComponent } from '../reset-password-page/reset-password-page.component';

@Component({
  selector: 'form-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormCreateComponent, ResetPasswordPageComponent, CommonModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
