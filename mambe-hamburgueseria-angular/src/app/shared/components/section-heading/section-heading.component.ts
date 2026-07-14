import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() align: 'left' | 'center' = 'left';
  @Input() theme: 'light' | 'dark' = 'light';
}
