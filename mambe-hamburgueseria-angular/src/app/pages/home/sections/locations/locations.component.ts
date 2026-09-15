import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { BRANCHES } from '../../../../core/config/site.config';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

type ScheduleRow = {
  days: string;
  hours: string;
};

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    SectionHeadingComponent,
    RevealDirective
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsComponent {

  readonly branches = BRANCHES;

  readonly schedules: Record<string, {
    status: string;
    note: string;
    rows: ScheduleRow[];
  }> = {
    'Andalucía': {
      status: 'Martes cerrado',
      note: 'Atención nocturna',
      rows: [
        {
          days: 'Lunes a viernes',
          hours: '6:00 pm a 10:30 pm'
        },
        {
          days: 'Sábado, domingo y festivos',
          hours: '6:00 pm a 11:00 pm'
        }
      ]
    },

    'Tuluá': {
      status: 'Abierto todos los días',
      note: 'Atención continua',
      rows: [
        {
          days: 'Lunes a viernes',
          hours: '6:00 pm a 11:00 pm'
        },
        {
          days: 'Sábado, domingo y festivos',
          hours: '6:00 pm a 11:30 pm'
        }
      ]
    }
  };

  getSchedule(city: string) {
    return this.schedules[city]?.rows ?? [];
  }

  getStatus(city: string) {
    return this.schedules[city]?.status ?? '';
  }

  getNote(city: string) {
    return this.schedules[city]?.note ?? '';
  }

  isAlwaysOpen(city: string): boolean {
    return city === 'Tuluá';
  }
}