import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForms: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    confirmPassword: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
  });

  public get name(): string {
    return this.signupForms.get('name')?.value;
  }

  public get lastName(): string {
    return this.signupForms.get('lastName')?.value;
  }

  public get email(): string {
    return this.signupForms.get('email')?.value;
  }

  public get password(): string {
    return this.signupForms.get('password')?.value;
  }

  public get confirmPassword(): string {
    return this.signupForms.get('confirmPassword')?.value;
  }

  signup() {
    if (this.signupForms.invalid) {
      alert('Formulário inválido!');
      return;
    }

    if (this.confirmPassword !== this.password) {
      alert('As senhas não correspondem!');
      return;
    }
  }
}
