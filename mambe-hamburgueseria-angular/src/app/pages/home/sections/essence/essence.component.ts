import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-essence',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './essence.component.html',
  styleUrl: './essence.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EssenceComponent {
  readonly values = [
    'Respeto',
    'Reconocimiento',
    'Empatía',
    'Amabilidad',
    'Servicio'
  ] as const;
}
