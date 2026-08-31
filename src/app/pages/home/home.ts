import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LandingModal } from '../../components/landing-modal/landing-modal';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
  private dialogService = inject(DialogService);
  
  processSteps = [
    { 
      icon: 'pi pi-map-marker', 
      title: 'Cerca de tu destino', 
      desc: 'Encuentra alojamiento filtrando directamente por tu centro de trabajo' 
    },
    { 
      icon: 'pi pi-file-edit', 
      title: 'Cero burocracia', 
      desc: 'Redactamos el contrato de temporada y gestionamos la firma digital. Sin desplazamientos ni papeleos.' 
    },
    { 
      icon: 'pi pi-shield', 
      title: 'Gestión 100% delegada', 
      desc: 'Nos ocupamos de pagos, fianzas y cualquier incidencia legal para que ni arrendador ni arrendatario se preocupen de nada.' 
    }
  ];

  openLanding(role: 'propietario' | 'inquilino'): void {
    this.dialogService.open(LandingModal, {
      width: '28rem',
      modal: true,
      dismissableMask: true,
      closable: true,
      closeOnEscape: true,
      draggable: false,
      resizable: false,
      focusOnShow: true,
      data: { role }
    });
  }
}