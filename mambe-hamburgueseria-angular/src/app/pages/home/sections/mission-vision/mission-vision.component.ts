import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionVisionComponent {}
