import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputOtpModule } from 'primeng/inputotp';

// Pantallas de la modal
type AuthStep = 'email' | 'login-password' | 'verify-code' | 'set-password';

@Component({
  selector: 'app-login-modal',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    InputOtpModule
  ],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss'
})
export class LoginModal {
  private dialogRef = inject(DynamicDialogRef);
  private fb = inject(NonNullableFormBuilder);

  // Signal para controlar la vista actual
  readonly currentStep = signal<AuthStep>('email');
  
  // Signal para mostrar estado de carga en los botones
  readonly isLoading = signal(false);

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    code: ['']
  });

  get f() {
    return this.authForm.controls;
  }

  // --- PASO 1: validar email ---
  onEmailSubmit(): void {
    if (this.f.email.invalid) {
      this.f.email.markAsTouched();
      return;
    }

    const email = this.f.email.value;

    this.isLoading.set(true);
    this.f.email.disable();

    setTimeout(() => {
      this.isLoading.set(false);
      this.f.email.enable();
      
      if (email === 'test@test.com') {
        this.currentStep.set('login-password');
      } else {
        this.currentStep.set('verify-code');
      }
    }, 1000);
  }

  // --- PASO 2A: iniciar sesión (ya existe una cuenta) ---
  onLoginSubmit(): void {
    const passwordControl = this.f.password;
    const password = passwordControl.value || '';
    // Regex: al menos una letra (?=.*[a-zA-Z]), un número (?=.*\d) y un símbolo (?=.*[\W_])
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;

    if (password.length < 8 || !passwordRegex.test(password)) {
      passwordControl.setErrors({ invalid: true });
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Sesión iniciada con:', this.authForm.getRawValue());
      this.dialogRef.close();
    }, 1000);
  }

  // --- PASO 2B: verificar código (nuevo usuario) ---
  onVerifyCode(): void {
    const codeControl = this.f.code;
    if (!codeControl.value || codeControl.value.length !== 6) {
      codeControl.setErrors({ invalid: true });
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      // Código correcto -> pasamos a establecer la contraseña
      this.currentStep.set('set-password');
    }, 1000);
  }

  // --- PASO 3B: completar registro (nuevo usuario) ---
  onRegisterSubmit(): void {
    const passwordControl = this.f.password;
    if (!passwordControl.value || passwordControl.value.length < 8) {
      passwordControl.setErrors({ invalid: true });
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Usuario registrado con:', this.authForm.getRawValue());
      this.dialogRef.close();
    }, 1000);
  }

  // Helper para volver atrás
  goBack(step: AuthStep): void {
    this.currentStep.set(step);
    this.f.password.reset();
    this.f.code.reset();
  }
}