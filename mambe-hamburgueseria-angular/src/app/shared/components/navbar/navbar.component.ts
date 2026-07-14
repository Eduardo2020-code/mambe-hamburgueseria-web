import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject
} from '@angular/core';
import { NAVIGATION_LINKS, WHATSAPP_URL } from '../../../core/config/site.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly links = NAVIGATION_LINKS;
  readonly whatsappUrl = WHATSAPP_URL;

  menuOpen = false;
  scrolled = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 36;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.document.body.classList.toggle('menu-open', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.document.body.classList.remove('menu-open');
  }

  scrollTo(target: string): void {
    this.closeMenu();
    this.document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
