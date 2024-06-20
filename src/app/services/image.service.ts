import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: '../assets/images/gabardina-flechas-fondo-gris.jpg',
                thumbnailImageSrc: '../assets/images/thumb-gabardina-flechas-fondo-gris.jpg',
                alt: 'Gabardina Flechas Fondo Gris',
                title: 'Gabardina-Flechas'
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
            },
            {
                itemImageSrc: '../assets/images/marcianos.jpg',
                thumbnailImageSrc: '../assets/images/thumb-marciano.jpg',
                alt: 'Marcianos',
                title: 'Title 7'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-calaveras.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-calaveras.jpg',
                alt: 'Calaveras',
                title: 'Title 7'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flamencos.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flamencos.jpg',
                alt: 'Flamencos',
                title: 'Title 7'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flores-azules-lilas.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flores-azules-lilas.jpg',
                alt: 'Flores Azules y Lilas',
                title: 'Title 7'
            },
            {
                itemImageSrc: '../assets/images/cordura-liviana-flores-rojas-fondo-negro.jpg',
                thumbnailImageSrc: '../assets/images/thumb-cordura-liviana-flores-rojas-fondo-negro.jpg',
                alt: 'Flores Rojas Fondo Negro',
                title: 'Title 7'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};