import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {}
