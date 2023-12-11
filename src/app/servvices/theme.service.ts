import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string;

  constructor() {
    this.theme = this.getFromLocalStorage() || 'light';
  }

  private getFromLocalStorage(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme');
    }
    return null;
  }

  getTheme(): string {
    return this.theme;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
  } ctor() { }
}
