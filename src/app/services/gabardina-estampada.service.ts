import { Injectable } from '@angular/core';
import { PhotoService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class GabardinaEstampadaService extends PhotoService{
  override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
    return [

        {
            itemImageSrc: '../assets/images/gabardina-flechas-fondo-gris.jpg',
            thumbnailImageSrc: '../assets/images/thumb-gabardina-flechas-fondo-gris.jpg',
            alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
            title: 'Cordura Melange Jean'
        },
        {
          itemImageSrc: '../assets/images/gabardina-florcitas-fondo-azul.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-florcitas-fondo-azul.jpg',
          alt: 'Gabardina Florcitas Fondo Azul',
          title: 'Title 2'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flore-coral.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flore-coral.jpg',
          alt: 'Gabardina Flores Coral',
          title: 'Title 3'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-marron.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-marron.jpg',
          alt: 'Gabardina Flores Marron',
          title: 'Title 5'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-pastel.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-pastel.jpg',
          alt: 'Gabardina Flores Pastel',
          title: 'Title 6'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-rojas-fondo-azul.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-rojas-fondo-azul.jpg',
          alt: 'Flores Rojas Fondo Azul',
          title: 'Title 7'
      }
    ];
}
override getImages() {
    return Promise.resolve(this.getData());
}
}
