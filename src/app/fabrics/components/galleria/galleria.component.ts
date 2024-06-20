import { Component } from '@angular/core';
import { PhotoService } from '../../../services/image.service';
import { Galleria, GalleriaModule } from 'primeng/galleria';
import { CorduraEstampadaService } from '../../../services/cordura-estampada.service';

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.css'
})
export class GalleriaComponent {
  images: any[] | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
  }
}
