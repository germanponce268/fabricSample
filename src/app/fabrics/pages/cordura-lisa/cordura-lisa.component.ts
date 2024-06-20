import { Component } from '@angular/core';
import { PhotoService } from '../../../services/image.service';
import { CorduraLisaService } from '../../../services/cordura-lisa.service';
import { GalleriaComponent } from '../../components/galleria/galleria.component';

@Component({
  selector: 'app-cordura-lisa',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './cordura-lisa.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:CorduraLisaService}]
})
export class CorduraLisaComponent {

}
