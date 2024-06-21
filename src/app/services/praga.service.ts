import { Injectable } from '@angular/core';
import { PhotoService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class PragaService extends PhotoService{
  override getData(): { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[] {
    return [

        {
            itemImageSrc: '../assets/images/praga-suela-claro.jpg',
            thumbnailImageSrc: '../assets/images/thumb-praga-suela-claro.jpg',
            alt: 'Producto biodegradable Vinylife, resistente durante el uso y biodegradable cuando se deja de usar.',
            title: 'Praga Suela Claro'
        },
        {
          itemImageSrc: '../assets/images/praga-negro.jpg',
          thumbnailImageSrc: '../assets/images/thumb-praga-negro.jpg',
          alt: 'Producto biodegradable Vinylife, resistente durante el uso y biodegradable cuando se deja de usar.',
          title: 'Praga Negro'
      }
    ];
}
override getImages() {
    return Promise.resolve(this.getData());
}
}
