import { Component, inject, signal, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';

import { PROVINCIAS } from '../../shared/constants/provincias.constant';

type UserRole = 'propietario' | 'inquilino' | null;

@Component({
  selector: 'app-landing-modal',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    SelectModule,
    SliderModule
  ],
  templateUrl: './landing-modal.html',
  styleUrl: './landing-modal.scss'
})
export class LandingModal implements OnInit {

  private dialogRef = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private fb = inject(NonNullableFormBuilder);

  readonly role = signal<UserRole>(null);
  readonly isLoading = signal(false);
  
  readonly provincias = PROVINCIAS;

  ngOnInit(): void {
    const initialRole = this.config.data?.role;
    
    if (initialRole) {
      this.selectRole(initialRole);
    }
  }

  landingForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]],
    province: [''], 
    // distance: [15],
    price: [null as number | null]
  });

  get f() { return this.landingForm.controls; }

  selectRole(selectedRole: 'propietario' | 'inquilino'): void {
    this.role.set(selectedRole);
    
    // Validadores base para ambos
    this.f.name.setValidators([Validators.required]);
    this.f.province.setValidators([Validators.required]);
    this.f.price.setValidators([Validators.required, Validators.min(1)]);
    
    // Validador específico para inquilino
    // if (selectedRole === 'inquilino') {
    //   this.f.distance.setValidators([Validators.required, Validators.min(0), Validators.max(50)]);
    // } else {
    //   this.f.distance.clearValidators();
    // }
    
    this.f.name.updateValueAndValidity();
    this.f.province.updateValueAndValidity();
    this.f.price.updateValueAndValidity();
    // this.f.distance.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.landingForm.invalid || !this.role()) {
      this.landingForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Lead capturado:', { ...this.landingForm.getRawValue(), role: this.role() });
      this.dialogRef.close();
    }, 1000);
  }
}