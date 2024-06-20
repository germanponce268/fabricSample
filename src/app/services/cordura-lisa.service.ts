import { Injectable } from "@angular/core";
import { PhotoService } from "./image.service";

@Injectable()
export class CorduraLisaService extends PhotoService{
    override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
        return [

            {
                itemImageSrc: '../assets/images/cordura-negra-600x600.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-negra-600x600.jpg',
                alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
                title: 'Cordura Negra'
            },
            {
                itemImageSrc: '../assets/images/cordura-verde-600x600.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-verde-600x600.jpg',
                alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
                title: 'Cordura Verde Beneton'
            }
        ];
    }
    override getImages() {
        return Promise.resolve(this.getData());
    }
}