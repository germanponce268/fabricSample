import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { PhotoService } from '../../../services/image.service';
import { CharolLisoService } from '../../../services/charol-liso.service';

@Component({
  selector: 'app-charol-liso',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './charol-liso.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:CharolLisoService}]
})
export class CharolLisoComponent {

}
