import { Injectable, inject } from "@angular/core";
import { PhotoService } from "./image.service";

@Injectable()
export class CorduraEstampadaService extends PhotoService{
    override getData() {
        return [
            
            {
                itemImageSrc: '../assets/images/marcianos.jpg',
                thumbnailImageSrc: '../assets/images/thumb-marciano.jpg',
                alt: 'Es una tela liviana y flexible, altamente resistente e impermeable, diseñada para brindar una protección duradera.',
                title: 'Marcianos Cordura Liviana'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-calaveras.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-calaveras.jpg',
                alt: 'Es una tela liviana y flexible, altamente resistente e impermeable, diseñada para brindar una protección duradera.',
                title: 'Calaveras Cordura Liviana'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flamencos.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flamencos.jpg',
                alt: 'Es una tela liviana y flexible, altamente resistente e impermeable, diseñada para brindar una protección duradera.',
                title: 'Flamencos Cordura Liviana'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flores-azules-lilas.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flores-azules-lilas.jpg',
                alt: 'Es una tela liviana y flexible, altamente resistente e impermeable, diseñada para brindar una protección duradera.',
                title: 'Flores Azules y Lilas Cordura Liviana'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flores-rojas-fondo-negro.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flores-rojas-fondo-negro.jpg',
                alt: 'Es una tela liviana y flexible, altamente resistente e impermeable, diseñada para brindar una protección duradera.',
                title: 'Flores Rojas Fondo Negro Cordura Liviana'
            }
        ];
    }

    override getImages() {
        return Promise.resolve(this.getData());
    }
}