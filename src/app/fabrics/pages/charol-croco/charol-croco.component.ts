import { Component } from '@angular/core';
import { GalleriaComponent } from '../../components/galleria/galleria.component';
import { PhotoService } from '../../../services/image.service';
import { CharolCrocoService } from '../../../services/charol-croco.service';

@Component({
  selector: 'app-charol-croco',
  standalone: true,
  imports: [GalleriaComponent],
  templateUrl: './charol-croco.component.html',
  styles: ``,
  providers:[{provide:PhotoService, useClass:CharolCrocoService}]
})
export class CharolCrocoComponent {

}
