import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
