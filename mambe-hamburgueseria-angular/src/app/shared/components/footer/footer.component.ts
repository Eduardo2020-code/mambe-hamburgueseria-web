import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NAVIGATION_LINKS,
  SITE_CONFIG,
  WHATSAPP_URL
} from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly config = SITE_CONFIG;
  readonly links = NAVIGATION_LINKS;
  readonly whatsappUrl = WHATSAPP_URL;

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
