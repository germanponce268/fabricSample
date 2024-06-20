import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { PhotoService } from '../../../services/image.service';
import { GabardinaEstampadaService } from '../../../services/gabardina-estampada.service';

@Component({
  selector: 'app-gabardina-estampada',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './gabardina-estampada.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:GabardinaEstampadaService}]
})
export class GabardinaEstampadaComponent {

}
