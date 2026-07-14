import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP_URL } from '../../../../core/config/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly whatsappUrl = WHATSAPP_URL;

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
