import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginModal } from '../login-modal/login-modal';
import { LandingModal } from '../landing-modal/landing-modal';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  providers: [DialogService],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  
  private dialogService = inject(DialogService);
  
  openProfileModal(): void {
    // this.dialogService.open(LoginModal, {
    //   // header: 'Iniciar sesión',
    //   width: '28rem',
    //   modal: true,
    //   dismissableMask: true,
    //   closable: true,
    //   closeOnEscape: true,
    //   draggable: false,
    //   resizable: false,
    //   focusOnShow: true
    // });

    this.dialogService.open(LandingModal, {
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