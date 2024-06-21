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
            alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
            title: 'Flechas Fondo Gris - Gabardina Algodon'
        },
        {
          itemImageSrc: '../assets/images/gabardina-florcitas-fondo-azul.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-florcitas-fondo-azul.jpg',
          alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
          title: 'Florcitas Fondo Azul - Gabardina Algodon'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flore-coral.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flore-coral.jpg',
          alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
          title: 'Flores Coral - Gabardina Algodon'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-marron.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-marron.jpg',
          alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
          title: 'Flores Marron - Gabardina Algodon'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-pastel.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-pastel.jpg',
          alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
          title: 'Flores Pastel - Gabardina Algodon'
      },
      {
          itemImageSrc: '../assets/images/gabardina-flores-rojas-fondo-azul.jpg',
          thumbnailImageSrc: '../assets/images/thumb-gabardina-flores-rojas-fondo-azul.jpg',
          alt: 'La gabardina es una tela duradera y resistente, caracterizada por su tejido cruzado diagonal. Usada en abrigos y ropa de trabajo. Es resistente al agua y viento, versátil y elegante, con una textura firme y mantenimiento fácil.',
          title: 'Flores Rojas Fondo Azul - Gabardina Algodon'
      }
    ];
}
override getImages() {
    return Promise.resolve(this.getData());
}
}
