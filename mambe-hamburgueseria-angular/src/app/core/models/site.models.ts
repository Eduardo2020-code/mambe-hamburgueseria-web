export interface NavigationLink {
  readonly label: string;
  readonly target: string;
}

export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly subtitle: string;
}

export interface Branch {
  readonly city: string;
  readonly kicker: string;
  readonly address: string;
  readonly schedule: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly mapsUrl: string;
  readonly image: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
}
