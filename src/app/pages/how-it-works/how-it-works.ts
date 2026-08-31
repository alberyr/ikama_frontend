import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { LandingModal } from '../../components/landing-modal/landing-modal';

@Component({
  selector: 'app-how-it-works',
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss'
})
export class HowItWorks {
  constructor(private dialogService: DialogService) {}

  steps = [
    {
      num: '01',
      title: 'Verificación',
      tenant: 'Busca tu centro de destino (colegio, hospital...) y elige un piso cercano. Verificamos tu nombramiento oficial.',
      owner: 'Publicas tu vivienda. Nosotros nos encargamos de cruzarla solo con perfiles públicos verificados.'
    },
    {
      num: '02',
      title: 'Contrato Digital',
      tenant: 'Firma desde el móvil el contrato de temporada (LAU) sin papeleos ni desplazamientos previos.',
      owner: 'Generamos un contrato blindado legalmente y gestionamos la firma biométrica de ambas partes.'
    },
    {
      num: '03',
      title: 'Llaves y Garantía',
      tenant: 'Recoge las llaves y céntrate en tu nuevo puesto de trabajo. Sin comisiones abusivas.',
      owner: 'Cobras puntualmente el día 1 de cada mes, protegido por nuestro seguro integral de impago y daños.'
    }
  ];

  openLanding(role: 'propietario' | 'inquilino'): void {
    this.dialogService.open(LandingModal, {
      width: '100%',
      modal: true,
      data: { role }
    });
  }
}