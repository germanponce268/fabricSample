import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Galleria, GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../../services/image.service';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule,GalleriaModule, ButtonModule, SidebarModule, PanelMenuModule ],
  templateUrl: './layout-page.component.html',
  styles: [],
providers:[PhotoService]
})
export class LayoutPageComponent {
  public sidebarVisible: boolean = false;
  public sidebarItems = [
    {label:'estampadas', url:'./estampadas'},
    {label:'lisas', url:'./lisas'},
    {label:'texturadas', url:'./texturadas'}
  ]
 public items: MenuItem[] = [];
 public items2: MenuItem[] = [];
 public logo!: string; 
    ngOnInit() {
        this.logo = '/assets/images/logo-light.png';
        this.items = [
            {
                label: 'Cordura',
                icon: 'pi pi-star',
                items: [
                    {
                        label: 'Estampadas',
                        icon: 'pi pi-image',
                        routerLink:'./cordura-estampada'
                    },
                    {
                        label: 'Lisas',
                        icon: 'pi pi-heart',
                        routerLink:'./cordura-lisa'
                    },
                    {
                        label: 'Melange',
                        icon: 'pi pi-heart-fill',
                        routerLink:'./cordura-melange'
                    }
                ]
            },
            {
                label: 'Gabardina',
                icon: 'pi pi-star',
                items: [
                    {
                        label: 'Estampadas',
                        icon: 'pi pi-image',
                        routerLink:'./gabardina-estampada'
                    },
                    {
                        label: 'Lisas',
                        icon: 'pi pi-heart',
                        routerLink:'./gabardina-lisa'
                    },
                    
                ]
            }
        ];

         this.items2 = [
            {
                label: 'Charol',
                icon: 'pi pi-star',
                items: [
                    {
                        label: 'Croco',
                        icon: 'pi pi-heart-fill',
                        routerLink:'./charol-croco'
                    },
                    {
                        label: 'Liso',
                        icon: 'pi pi-heart',
                        routerLink:'./charol-liso'
                    }
                ]
            },
            {
                label: 'Praga',
                //icon: 'pi pi-cloud',
                routerLink:'./praga'
            }
        ]
    }
}