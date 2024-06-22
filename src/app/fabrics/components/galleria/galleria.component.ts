import { ChangeDetectorRef, Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { PhotoService } from '../../../services/image.service';
import { Galleria, GalleriaModule } from 'primeng/galleria';
import { CorduraEstampadaService } from '../../../services/cordura-estampada.service';
import { ButtonModule } from 'primeng/button';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [GalleriaModule,ButtonModule],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.css',
})
export class GalleriaComponent {
  images?: any[] | undefined;
  onFullScreenListener: any;
  fullscreen: boolean = false;
  showThumbnails: boolean | undefined;
  activeIndex: number = 0;
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

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, 
    @Inject(DOCUMENT) private document : Document,
    private photoService: PhotoService,  
    private cd: ChangeDetectorRef) {}
  @ViewChild('galleria') galleria?: Galleria ;
  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
      if (isPlatformBrowser(this.platformId)) {
        this.bindDocumentListeners();
      }
    
  }

  toggleFullScreen() {
    if (this.fullscreen) {
        this.closePreviewFullScreen();
    } else {
        this.openPreviewFullScreen();
    }

    this.cd.detach();
}

onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
}

bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    this.document.addEventListener('fullscreenchange', this.onFullScreenListener);
    this.document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    this.document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
    this.document.addEventListener('msfullscreenchange', this.onFullScreenListener);
}

unbindDocumentListeners() {
    this.document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    this.document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    this.document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    this.document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
}

ngOnDestroy() {
    this.unbindDocumentListeners();
}
openPreviewFullScreen() {
    let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      } else {
        console.error('Fullscreen API is not supported.');
      }
}



closePreviewFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } 
}


galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
}

fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
}

onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
}
}
