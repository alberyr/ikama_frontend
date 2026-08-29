import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog'; // Importamos el servicio
import { LoginModal } from '../login-modal/login-modal'; // Importamos nuestro nuevo componente

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ButtonModule], // Hemos quitado DialogModule y InputTextModule
  providers: [DialogService], // ¡Importante! Proveemos el servicio aquí
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  
  // Inyectamos el servicio de modales dinámicas
  private dialogService = inject(DialogService);
  
  openProfileModal(): void {
    this.dialogService.open(LoginModal, {
      // header: 'Iniciar sesión',
      width: '28rem',
      modal: true,
      dismissableMask: true,
      closable: true,
      closeOnEscape: true,
      draggable: false,
      resizable: false,
      focusOnShow: true
    });
  }
}