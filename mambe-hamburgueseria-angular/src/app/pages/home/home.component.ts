import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { WhatsappFloatComponent } from '../../shared/components/whatsapp-float/whatsapp-float.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { MissionVisionComponent } from './sections/mission-vision/mission-vision.component';
import { EssenceComponent } from './sections/essence/essence.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { CharacterComponent } from './sections/character/character.component';
import { LocationsComponent } from './sections/locations/locations.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MissionVisionComponent,
    EssenceComponent,
    GalleryComponent,
    CharacterComponent,
    LocationsComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
