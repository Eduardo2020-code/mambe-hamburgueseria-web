import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  RevealDirective
} from '../../../../shared/directives/reveal.directive';

type ProductItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RevealDirective
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  readonly products: ProductItem[] = [

    {
      name: 'Aborigen',
      description:
        '150 g de carne Angus, piña asada, mermelada de tocineta, queso americano y vegetales.',
      image: 'assets/images/aborineje.JPEG',
      alt: 'Hamburguesa Aborigen Mambe'
    },

    {
      name: 'Cafetera',
      description:
        '150 g de carne Angus, cebolla caramelizada, salsa de café, queso americano y vegetales.',
      image: 'assets/images/cafetera.JPEG',
      alt: 'Hamburguesa Cafetera Mambe'
    },

    {
      name: 'Smash Marimba',
      description:
        '160 g de carne Angus smash, pepinillos, tocineta, doble queso americano y vegetales.',
      image: 'assets/images/marimba.JPEG',
      alt: 'Hamburguesa Smash Marimba Mambe'
    },

    {
      name: 'Primitiva',
      description:
        '150 g de carne Angus, queso Philadelphia, mermelada de tocineta, tomate y lechuga.',
      image: 'assets/images/primitiva.jpeg',
      alt: 'Hamburguesa Primitiva Mambe'
    },


    {
      name: 'Amapola',
      description:
        'Hamburguesa de pollo con 125 g de pechuga apanada, pepinillos, salsa tribal y vegetales.',
      image: 'assets/images/amapola.JPEG',
      alt: 'Hamburguesa Amapola Mambe'
    },

    {
      name: 'Origen',
      description:
        '150 g de carne Angus, vegetales y queso americano.',
      image: 'assets/images/productos/origen.jpg',
      alt: 'Hamburguesa Origen Mambe'
    },

    {
      name: 'Smash Artesanal',
      description:
        '160 g de doble carne Angus smash, vegetales y queso americano.',
      image: 'assets/images/productos/smash-artesanal.jpg',
      alt: 'Hamburguesa Smash Artesanal Mambe'
    },

    {
      name: 'Ancestral',
      description:
        '300 g de doble carne Angus, vegetales y queso americano.',
      image: 'assets/images/productos/ancestral.jpg',
      alt: 'Hamburguesa Ancestral Mambe'
    },

    {
      name: 'Mini Burgers',
      description:
        'Prueba la Primitiva, la Aborigen y la Cafetera en versión mini.',
      image: 'assets/images/mini.jpg',
      alt: 'Mini Burgers Mambe'
    },

    {
      name: 'Nachos',
      description:
        'Nachos para compartir con pulled pork, jalapeños, queso doble crema, guacamole, pico de gallo y sour cream.',
      image: 'assets/images/nachos.JPEG',
      alt: 'Nachos Mambe'
    },

    {
      name: 'Papas Mambe',
      description:
        'Papas a la francesa con pulled pork, gratinadas con queso doble crema y coronadas con mermelada de tocineta.',
      image: 'assets/images/papas.jpeg',
      alt: 'Papas Mambe'
    },
    {
      name: 'Aros de Cebolla',
      description:
        'Aros de cebolla crujientes, ideales para acompañar o compartir.',
      image: 'assets/images/AROS.JPEG',
      alt: 'Aros de cebolla Mambe'
    }
  ];

}