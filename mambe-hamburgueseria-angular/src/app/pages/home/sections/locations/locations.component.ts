import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRANCHES, WHATSAPP_URL } from '../../../../core/config/site.config';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [NgOptimizedImage, SectionHeadingComponent, RevealDirective],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsComponent {
  readonly branches = BRANCHES;
  readonly whatsappUrl = WHATSAPP_URL;
}
