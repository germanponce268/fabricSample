import { Injectable } from '@angular/core';
import { PhotoService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class CharolCrocoService extends PhotoService{
  override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
    return [

        {
            itemImageSrc: '../assets/images/charol-crocko-negro.jpg',
            thumbnailImageSrc: '../assets/images/thumb-charol-crocko-negro.jpg',
            alt: 'La tela charol croco es un material sintético con una capa brillante y un patrón en relieve que imita la piel de cocodrilo. Es duradera, impermeable y fácil de limpiar.',
            title: 'Charol Croco'
        },
        {
          itemImageSrc: '../assets/images/charol-crocko-magenta.jpg',
          thumbnailImageSrc: '../assets/images/thumb-charol-crocko-magenta.jpg',
          alt: 'La tela charol croco es un material sintético con una capa brillante y un patrón en relieve que imita la piel de cocodrilo. Es duradera, impermeable y fácil de limpiar.',
          title: 'Charol Croco'
      }
    ];
}
override getImages() {
    return Promise.resolve(this.getData());
}
}
