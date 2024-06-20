import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { CorduraEstampadaService } from '../../../services/cordura-estampada.service';
import { PhotoService } from '../../../services/image.service';

@Component({
  selector: 'app-cordura-estampada',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './cordura-estampada.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:CorduraEstampadaService}]
})
export class CorduraEstampadaComponent {

}
