import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject
} from '@angular/core';
import { GALLERY_ITEMS } from '../../../../core/config/site.config';
import { GalleryItem } from '../../../../core/models/site.models';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage, SectionHeadingComponent, RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  readonly items = GALLERY_ITEMS;
  selectedItem: GalleryItem | null = null;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  open(item: GalleryItem): void {
    this.selectedItem = item;
    this.document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.selectedItem = null;
    this.document.body.style.removeProperty('overflow');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedItem) {
      this.close();
    }
  }
}
