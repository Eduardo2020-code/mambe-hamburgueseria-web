import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG, WHATSAPP_URL } from '../../../../core/config/site.config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly config = SITE_CONFIG;
  readonly whatsappUrl = WHATSAPP_URL;

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
