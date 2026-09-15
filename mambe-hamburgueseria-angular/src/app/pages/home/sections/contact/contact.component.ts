import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  RevealDirective
} from '../../../../shared/directives/reveal.directive';


@Component({
  selector: 'app-contact',

  standalone: true,

  imports: [
    RevealDirective
  ],

  templateUrl:
    './contact.component.html',

  styleUrl:
    './contact.component.scss',

  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class ContactComponent {


  openChat(): void {

    window.dispatchEvent(
      new CustomEvent(
        'open-mambe-chat'
      )
    );

  }


}