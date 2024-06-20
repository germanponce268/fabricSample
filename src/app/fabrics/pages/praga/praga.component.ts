import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { PhotoService } from '../../../services/image.service';
import { PragaService } from '../../../services/praga.service';

@Component({
  selector: 'app-praga',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './praga.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:PragaService}]
})
export class PragaComponent {

}
