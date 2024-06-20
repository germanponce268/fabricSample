import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { PhotoService } from '../../../services/image.service';
import { CorduraMelangeService } from '../../../services/cordura-melange.service';

@Component({
  selector: 'app-cordura-melange',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './cordura-melange.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:CorduraMelangeService}]
})
export class CorduraMelangeComponent {

}
