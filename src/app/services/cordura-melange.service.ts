import { Injectable } from "@angular/core";
import { PhotoService } from "./image.service";

@Injectable()
export class CorduraMelangeService extends PhotoService{
    override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
        return [

            {
                itemImageSrc: '../assets/images/cordura-melange-jean-600x400.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-melange-jean-600x400.jpg',
                alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
                title: 'Cordura Melange Jean'
            },
            {
                itemImageSrc: '../assets/images/cordura-melange-violeta.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-melange-violeta.jpg',
                alt: 'Es una tela plástica compuesta por un tejido de poliester cubierto del reverso con una lámina de PVC. Posee buena resistencia a los efectos de la luz natural, fácil de lavar, seca rápidamente, no se deforma.',
                title: 'Cordura Melange Violeta'
            }
        ];
    }
    override getImages() {
        return Promise.resolve(this.getData());
    }
}