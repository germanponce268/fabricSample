import { Injectable } from '@angular/core';
import { PhotoService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class CharolLisoService extends PhotoService{
  override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
    return [

        {
            itemImageSrc: '../assets/images/charol-liso-negro.jpg',
            thumbnailImageSrc: '../assets/images/thumb-charol-liso-negro.jpg',
            alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
            title: 'Cordura Melange Jean'
        }
    ];
}
override getImages() {
    return Promise.resolve(this.getData());
}
}
