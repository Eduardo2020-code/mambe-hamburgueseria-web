import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  NAVIGATION_LINKS
} from '../../../core/config/site.config';


@Component({
  selector: 'app-footer',

  standalone: true,

  imports: [],

  templateUrl: './footer.component.html',

  styleUrl: './footer.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  readonly navigation =
    NAVIGATION_LINKS;

  readonly currentYear =
    new Date().getFullYear();


  scrollTo(target: string): void {

    document
      .getElementById(target)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

  }


  openChat(): void {

    window.dispatchEvent(
      new CustomEvent(
        'open-mambe-chat'
      )
    );

  }

}