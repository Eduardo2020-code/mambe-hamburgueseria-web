import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal'
  }
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setStyle(element, '--reveal-delay', `${this.revealDelay}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'is-visible');
            this.observer?.unobserve(element);
          }
        }
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -45px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
