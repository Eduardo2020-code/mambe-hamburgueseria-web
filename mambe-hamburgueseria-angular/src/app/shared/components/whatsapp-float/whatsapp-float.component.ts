import { NgOptimizedImage } from '@angular/common';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  BRANCHES,
  SOCIAL_LINKS
} from '../../../core/config/site.config';


type MessageSender = 'bot' | 'user';


type ChatAction = {
  label: string;
  url: string;
};


type ChatMessage = {
  sender: MessageSender;
  text: string;
  actions?: ChatAction[];
};


type ProductInfo = {
  name: string;
  description: string;
};


@Component({
  selector: 'app-whatsapp-float',

  standalone: true,

  imports: [
    FormsModule,
    NgOptimizedImage
  ],

  templateUrl: './whatsapp-float.component.html',

  styleUrl: './whatsapp-float.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappFloatComponent {

  @ViewChild('messagesBox')
  private messagesBox?: ElementRef<HTMLDivElement>;


  isOpen = false;

  isTyping = false;

  draft = '';


  readonly quickQuestions = [
    'Sedes',
    'Horarios',
    'Productos',
    'Redes',
    'Misión y visión',
    'Maestro Mambe'
  ];


  messages: ChatMessage[] = [
    {
      sender: 'bot',

      text:
        '¡Hola! Soy el Maestro Mambe 🍔. Puedo ayudarte con nuestras sedes, horarios, productos, ubicaciones, redes sociales, misión, visión y mucho más.'
    }
  ];


  private readonly products: ProductInfo[] = [

    {
      name: 'Aborigen',

      description:
        '150 g de carne Angus, piña asada, mermelada de tocineta, queso americano y vegetales.'
    },

    {
      name: 'Cafetera',

      description:
        '150 g de carne Angus, cebolla caramelizada, salsa de café, queso americano y vegetales.'
    },

    {
      name: 'Smash Marimba',

      description:
        '160 g de carne Angus smash, pepinillos, tocineta, doble queso americano y vegetales.'
    },

    {
      name: 'Primitiva',

      description:
        '150 g de carne Angus, queso Philadelphia, mermelada de tocineta, tomate y lechuga.'
    },

    {
      name: 'Amapola',

      description:
        'Hamburguesa de pollo con 125 g de pechuga apanada, pepinillos, salsa tribal y vegetales.'
    },

    {
      name: 'Origen',

      description:
        '150 g de carne Angus, vegetales y queso americano.'
    },

    {
      name: 'Smash Artesanal',

      description:
        '160 g de doble carne Angus smash, vegetales y queso americano.'
    },

    {
      name: 'Ancestral',

      description:
        '300 g de doble carne Angus, vegetales y queso americano.'
    },

    {
      name: 'Mini Burgers',

      description:
        'Prueba la Primitiva, la Aborigen y la Cafetera en versión mini.'
    },

    {
      name: 'Nachos',

      description:
        'Nachos para compartir con pulled pork, jalapeños, queso doble crema, guacamole, pico de gallo y sour cream.'
    },

    {
      name: 'Papas Mambe',

      description:
        'Papas a la francesa con pulled pork, gratinadas con queso doble crema y coronadas con mermelada de tocineta.'
    },

    {
      name: 'Aros de Cebolla',

      description:
        'Aros de cebolla crujientes, ideales para acompañar o compartir.'
    }

  ];


  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}


  @HostListener('window:open-mambe-chat')
  onExternalOpen(): void {

    this.openChat();

  }


  toggleChat(): void {

    this.isOpen = !this.isOpen;

    this.cdr.markForCheck();

    if (this.isOpen) {
      this.scrollToBottom();
    }

  }


  openChat(): void {

    this.isOpen = true;

    this.cdr.markForCheck();

    this.scrollToBottom();

  }


  closeChat(): void {

    this.isOpen = false;

    this.cdr.markForCheck();

  }


  sendQuick(question: string): void {

    if (this.isTyping) {
      return;
    }

    this.processQuestion(question);

  }


  sendTyped(): void {

    if (this.isTyping) {
      return;
    }

    const value = this.draft.trim();

    if (!value) {
      return;
    }

    this.draft = '';

    this.processQuestion(value);

  }


  private processQuestion(question: string): void {

    this.messages = [
      ...this.messages,
      {
        sender: 'user',
        text: question
      }
    ];

    this.isTyping = true;

    /*
     * MUY IMPORTANTE:
     * actualizamos inmediatamente la vista.
     */
    this.cdr.markForCheck();

    this.scrollToBottom();


    const response =
      this.buildResponse(question);


    /*
     * Pequeña espera para mostrar
     * los 3 puntos del Maestro Mambe.
     */
    window.setTimeout(() => {

      this.messages = [
        ...this.messages,
        response
      ];

      this.isTyping = false;

      /*
       * Esto corrige el problema donde
       * la respuesta aparecía hasta
       * pulsar otro botón.
       */
      this.cdr.markForCheck();

      this.scrollToBottom();

    }, 750);

  }


  private buildResponse(question: string): ChatMessage {

    const query = this.normalize(question);


    /* ==============================
       SALUDO
       ============================== */

    if (
      query.includes('hola') ||
      query.includes('buenas') ||
      query.includes('buen dia')
    ) {

      return {
        sender: 'bot',

        text:
          '¡Hola! 👋 Bienvenido a Mambe. Puedes preguntarme por nuestras sedes, horarios, productos, ubicaciones, redes sociales o por el Maestro Mambe.'
      };

    }


    /* ==============================
       REDES SOCIALES
       ============================== */

    if (
      query.includes('redes') ||
      query.includes('instagram') ||
      query.includes('facebook') ||
      query.includes('tiktok')
    ) {

      return {
        sender: 'bot',

        text:
          'Síguenos en nuestras redes sociales para conocer novedades, productos y contenido de Mambe. 📱',

        actions:
          SOCIAL_LINKS.map(
            social => ({
              label: social.name,
              url: social.url
            })
          )
      };

    }


    /* ==============================
       PRECIOS
       ============================== */

    if (
      query.includes('precio') ||
      query.includes('cuanto cuesta') ||
      query.includes('valor')
    ) {

      return {
        sender: 'bot',

        text:
          'Los precios no se muestran en esta página. Puedes consultar precios y disponibilidad directamente con cualquiera de nuestras sedes.',

        actions:
          this.whatsappActions()
      };

    }


    /* ==============================
       ANDALUCÍA
       ============================== */

    if (query.includes('andalucia')) {

      const branch =
        BRANCHES.find(
          item => item.city === 'Andalucía'
        );

      return {
        sender: 'bot',

        text:
          '📍 Mambe Andalucía\n\nDirección: CRA 3 #10-28\nWhatsApp: 323 463 8649\n\n🕒 Horarios\n• Lunes, miércoles, jueves y viernes: 6:00 pm a 10:30 pm\n• Martes: cerrado\n• Sábados, domingos y festivos: 6:00 pm a 11:00 pm',

        actions:
          branch
            ? [
                {
                  label: 'Ver ubicación',
                  url: branch.mapsUrl
                },
                {
                  label: 'WhatsApp',
                  url: branch.phoneHref
                }
              ]
            : []
      };

    }


    /* ==============================
       TULUÁ
       ============================== */

    if (query.includes('tulua')) {

      const branch =
        BRANCHES.find(
          item => item.city === 'Tuluá'
        );

      return {
        sender: 'bot',

        text:
          '📍 Mambe Tuluá\n\nDirección: CRA 26A #40-63\nWhatsApp: 322 648 5792\n\n🕒 Abierto todos los días\n• Lunes a viernes: 6:00 pm a 11:00 pm\n• Sábados, domingos y festivos: 6:00 pm a 11:30 pm',

        actions:
          branch
            ? [
                {
                  label: 'Ver ubicación',
                  url: branch.mapsUrl
                },
                {
                  label: 'WhatsApp',
                  url: branch.phoneHref
                }
              ]
            : []
      };

    }


    /* ==============================
       SEDES
       ============================== */

    if (
      query.includes('sede') ||
      query.includes('ubicacion') ||
      query.includes('direccion') ||
      query.includes('donde estan')
    ) {

      return {
        sender: 'bot',

        text:
          'Tenemos dos sedes Mambe:\n\n📍 Andalucía\nCRA 3 #10-28\nWhatsApp: 323 463 8649\n\n📍 Tuluá\nCRA 26A #40-63\nWhatsApp: 322 648 5792\n\nSelecciona una ubicación para abrir Google Maps.',

        actions:
          this.locationActions()
      };

    }


    /* ==============================
       HORARIOS
       ============================== */

    if (
      query.includes('horario') ||
      query.includes('abierto') ||
      query.includes('cerrado')
    ) {

      return {
        sender: 'bot',

        text:
          '🕒 HORARIOS MAMBE\n\n📍 Andalucía\n• Lunes, miércoles, jueves y viernes: 6:00 pm a 10:30 pm\n• Martes: cerrado\n• Sábados, domingos y festivos: 6:00 pm a 11:00 pm\n\n📍 Tuluá\n• Lunes a viernes: 6:00 pm a 11:00 pm\n• Sábados, domingos y festivos: 6:00 pm a 11:30 pm'
      };

    }


    /* ==============================
       PRODUCTO ESPECÍFICO
       ============================== */

    const product =
      this.products.find(
        item =>
          query.includes(
            this.normalize(item.name)
          )
      );


    if (product) {

      return {
        sender: 'bot',

        text:
          `🍔 ${product.name}\n\n${product.description}`
      };

    }


    /* ==============================
       PRODUCTOS
       ============================== */

    if (
      query.includes('producto') ||
      query.includes('menu') ||
      query.includes('hamburguesa') ||
      query.includes('comida')
    ) {

      return {
        sender: 'bot',

        text:
          '🍔 PRODUCTOS DESTACADOS\n\n• Aborigen\n• Cafetera\n• Smash Marimba\n• Primitiva\n• Amapola\n• Origen\n• Smash Artesanal\n• Ancestral\n• Mini Burgers\n• Nachos\n• Papas Mambe\n• Aros de Cebolla\n\nPuedes preguntarme por cualquiera de ellos y te cuento qué contiene.'
      };

    }


    /* ==============================
       MISIÓN
       ============================== */

    if (query.includes('mision')) {

      return {
        sender: 'bot',

        text:
          'Nuestra misión es crear experiencias gastronómicas con dedicación, cuidando cada detalle desde la selección de los ingredientes hasta la presentación final, para ofrecer sabor, calidad y autenticidad en cada bocado.'
      };

    }


    /* ==============================
       VISIÓN
       ============================== */

    if (query.includes('vision')) {

      return {
        sender: 'bot',

        text:
          'Nuestra visión es consolidar a Mambe como una hamburguesería reconocida por su propuesta auténtica, su calidad constante y su capacidad de conectar con las personas mediante experiencias diferentes y memorables.'
      };

    }


    /* ==============================
       MAESTRO MAMBE
       ============================== */

    if (
      query.includes('maestro') ||
      query.includes('personaje')
    ) {

      return {
        sender: 'bot',

        text:
          'El Maestro Mambe representa la tradición, la creatividad y la alegría de nuestra identidad. Es el personaje que conecta la riqueza cultural colombiana con el universo de las hamburguesas Mambe. 🍔'
      };

    }


    /* ==============================
       INFORMACIÓN GENERAL
       ============================== */

    if (
      query.includes('informacion') ||
      query.includes('quienes somos') ||
      query.includes('mambe')
    ) {

      return {
        sender: 'bot',

        text:
          'Mambe es una experiencia gastronómica inspirada en la identidad colombiana. Creamos hamburguesas y productos con ingredientes llenos de carácter, cuidando cada preparación para ofrecer sabor, autenticidad y una experiencia memorable.'
      };

    }


    /* ==============================
       RESPUESTA GENERAL
       ============================== */

    return {
      sender: 'bot',

      text:
        'Puedo ayudarte con:\n\n📍 Sedes y ubicaciones\n🕒 Horarios\n🍔 Productos\n📱 Redes sociales\n🎯 Misión y visión\n👨‍🍳 Maestro Mambe\n\nPor ejemplo puedes preguntarme: “¿Dónde queda Tuluá?” o “¿Qué trae la Aborigen?”'
    };

  }


  private locationActions(): ChatAction[] {

    return BRANCHES.map(
      branch => ({
        label: `Mapa ${branch.city}`,
        url: branch.mapsUrl
      })
    );

  }


  private whatsappActions(): ChatAction[] {

    return BRANCHES.map(
      branch => ({
        label: `WhatsApp ${branch.city}`,
        url: branch.phoneHref
      })
    );

  }


  private normalize(value: string): string {

    return value
      .normalize('NFD')
      .replace(
        /[\u0300-\u036f]/g,
        ''
      )
      .toLowerCase();

  }


  private scrollToBottom(): void {

    window.setTimeout(() => {

      const element =
        this.messagesBox?.nativeElement;

      if (!element) {
        return;
      }

      element.scrollTop =
        element.scrollHeight;

    }, 40);

  }

}