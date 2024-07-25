import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from './form-login/form.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [CommonModule, FormComponent, FormCreateComponent, ResetPasswordPageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
