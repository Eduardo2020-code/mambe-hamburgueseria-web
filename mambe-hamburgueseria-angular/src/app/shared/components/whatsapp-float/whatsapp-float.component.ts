import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHATSAPP_URL } from '../../../core/config/site.config';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappFloatComponent {
  readonly whatsappUrl = WHATSAPP_URL;
}
