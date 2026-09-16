import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal
} from '@angular/core';

import {
  BRANCHES
} from '../../../../core/config/site.config';

import {
  RevealDirective
} from '../../../../shared/directives/reveal.directive';


type StatusType =
  | 'open'
  | 'closed'
  | 'soon';


interface BranchStatus {
  label: string;
  type: StatusType;
}


@Component({
  selector: 'app-locations',

  standalone: true,

  imports: [
    NgOptimizedImage,
    RevealDirective
  ],

  templateUrl: './locations.component.html',

  styleUrl: './locations.component.scss',

  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class LocationsComponent implements OnDestroy {

  readonly branches = BRANCHES;


  /*
   * Hora actual.
   * Se actualiza cada 30 segundos.
   */
  private readonly currentTime =
    signal(new Date());


  private readonly timer =
    window.setInterval(() => {

      this.currentTime.set(
        new Date()
      );

    }, 30000);


  ngOnDestroy(): void {

    window.clearInterval(
      this.timer
    );

  }


  /*
   * =========================================
   * ESTADO AUTOMÁTICO DE CADA SEDE
   * =========================================
   */

  getBranchStatus(
    city: string
  ): BranchStatus {

    const now =
      this.currentTime();


    /*
     * Siempre utilizamos hora Colombia
     */
    const colombiaTime =
      new Intl.DateTimeFormat(
        'en-US',
        {
          timeZone:
            'America/Bogota',

          weekday:
            'short',

          hour:
            '2-digit',

          minute:
            '2-digit',

          hourCycle:
            'h23'
        }
      )
      .formatToParts(now);


    const day =
      colombiaTime.find(
        part =>
          part.type === 'weekday'
      )?.value ?? '';


    const hour =
      Number(
        colombiaTime.find(
          part =>
            part.type === 'hour'
        )?.value ?? 0
      );


    const minute =
      Number(
        colombiaTime.find(
          part =>
            part.type === 'minute'
        )?.value ?? 0
      );


    const currentMinutes =
      (hour * 60) + minute;


    /*
     * Las dos sedes abren
     * a las 6:00 pm.
     */
    const openingTime =
      18 * 60;


    /*
     * =================================
     * ANDALUCÍA
     * =================================
     */

    if (
      city.toLowerCase() ===
      'andalucía'.toLowerCase()
    ) {

      /*
       * Martes cerrado todo el día
       */
      if (day === 'Tue') {

        return {
          label: 'Cerrado hoy',
          type: 'closed'
        };

      }


      /*
       * Sábado y domingo:
       * 6:00 pm - 11:00 pm
       *
       * Lunes, miércoles,
       * jueves y viernes:
       * 6:00 pm - 10:30 pm
       */

      const isWeekend =
        day === 'Sat' ||
        day === 'Sun';


      const closingTime =
        isWeekend

          ? 23 * 60

          : (22 * 60) + 30;


      /*
       * Antes de abrir
       */
      if (
        currentMinutes <
        openingTime
      ) {

        return {
          label:
            'Abre hoy 6:00 pm',

          type:
            'soon'
        };

      }


      /*
       * Abierto
       */
      if (
        currentMinutes >=
          openingTime &&

        currentMinutes <
          closingTime
      ) {

        return {
          label:
            'Abierto ahora',

          type:
            'open'
        };

      }


      /*
       * Ya cerró
       */
      return {
        label:
          'Cerrado por hoy',

        type:
          'closed'
      };

    }


    /*
     * =================================
     * TULUÁ
     * =================================
     */

    if (
      city.toLowerCase() ===
      'tuluá'.toLowerCase()
    ) {

      /*
       * Abre todos los días.
       *
       * Lunes a viernes:
       * 6:00 pm - 11:00 pm
       *
       * Sábado y domingo:
       * 6:00 pm - 11:30 pm
       */

      const isWeekend =
        day === 'Sat' ||
        day === 'Sun';


      const closingTime =
        isWeekend

          ? (23 * 60) + 30

          : 23 * 60;


      /*
       * Antes de abrir
       */
      if (
        currentMinutes <
        openingTime
      ) {

        return {
          label:
            'Abre hoy 6:00 pm',

          type:
            'soon'
        };

      }


      /*
       * Abierto
       */
      if (
        currentMinutes >=
          openingTime &&

        currentMinutes <
          closingTime
      ) {

        return {
          label:
            'Abierto ahora',

          type:
            'open'
        };

      }


      /*
       * Ya cerró
       */
      return {
        label:
          'Cerrado por hoy',

        type:
          'closed'
      };

    }


    return {
      label:
        'Consultar horario',

      type:
        'soon'
    };

  }


  /*
   * =========================================
   * CLASE DEL ESTADO
   * =========================================
   */

  getStatusClass(
    city: string
  ): string {

    const status =
      this.getBranchStatus(city);


    if (
      status.type === 'open'
    ) {

      return 'location-card__status location-card__status--open';

    }


    if (
      status.type === 'closed'
    ) {

      return 'location-card__status location-card__status--closed';

    }


    return 'location-card__status location-card__status--soon';

  }


  /*
   * =========================================
   * WHATSAPP
   * =========================================
   */

  getWhatsappUrl(
    phone: string,
    city: string
  ): string {

    let number =
      phone.replace(
        /\D/g,
        ''
      );


    /*
     * Si viene como número colombiano
     * de 10 dígitos agregamos 57.
     */
    if (
      number.length === 10
    ) {

      number =
        `57${number}`;

    }


    const message =
      `Hola Mambe, quiero información de la sede ${city}.`;


    return (
      `https://wa.me/${number}` +
      `?text=${encodeURIComponent(message)}`
    );

  }


  /*
   * =========================================
   * HORARIOS VISIBLES
   * =========================================
   */

  getWeekSchedule(
    city: string
  ): string {

    if (
      city.toLowerCase() ===
      'andalucía'.toLowerCase()
    ) {

      return (
        'Lun, mié, jue y vie'
      );

    }


    return (
      'Lunes a viernes'
    );

  }


  getWeekHours(
    city: string
  ): string {

    if (
      city.toLowerCase() ===
      'andalucía'.toLowerCase()
    ) {

      return (
        '6:00 pm a 10:30 pm'
      );

    }


    return (
      '6:00 pm a 11:00 pm'
    );

  }


  getWeekendHours(
    city: string
  ): string {

    if (
      city.toLowerCase() ===
      'andalucía'.toLowerCase()
    ) {

      return (
        '6:00 pm a 11:00 pm'
      );

    }


    return (
      '6:00 pm a 11:30 pm'
    );

  }

}