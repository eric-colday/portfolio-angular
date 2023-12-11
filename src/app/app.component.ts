import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './servvices/theme.service'; // Import du service de thème

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlist';
  //Dark mode
  mode: string;
  ballPosition: { left: string } | { right: string };

  constructor(private themeService: ThemeService) {

    this.mode = this.themeService.getTheme(); // Récupère le thème depuis le service
    this.ballPosition = this.mode === 'light' ? { left: '2px' } : { right: '2px' };
  }

  toggleMode() {
    this.themeService.toggleTheme(); // Appelle la fonction toggleTheme() du service
    this.mode = this.themeService.getTheme(); // Met à jour le thème dans le composant
    this.ballPosition = this.mode === 'light' ? { left: '2px' } : { right: '2px' };

  }

  // menuVar: boolean = false;

  // openMenu() {
  //   this.menuVar = !this.menuVar;
  // }

  showLinks: boolean = false;

  handleShowLinks(): void {
    this.showLinks = !this.showLinks;
  }
}

