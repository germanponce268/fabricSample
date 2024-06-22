import { Routes } from '@angular/router';
import { LayoutPageComponent } from './fabrics/pages/layout-page/layout-page.component';

export const routes : Routes = [
    {
        path:'telas',
        loadComponent:() => import('./fabrics/pages/layout-page/layout-page.component').then(c=>c.LayoutPageComponent),
        children:[
            {
                path:'cordura-estampada',
                loadComponent: () => import('./fabrics/pages/cordura-estampada/cordura-estampada.component').then(c=>c.CorduraEstampadaComponent)
            },
            {
                path:'cordura-lisa',
                loadComponent: () => import('./fabrics/pages/cordura-lisa/cordura-lisa.component').then(c=>c.CorduraLisaComponent)
            },
            {
                path:'cordura-melange',
                loadComponent: () => import('./fabrics/pages/cordura-melange/cordura-melange.component').then(c=>c.CorduraMelangeComponent)
                
            },
            {
                path:'gabardina-estampada',
                loadComponent:() => import('./fabrics/pages/gabardina-estampada/gabardina-estampada.component').then(c=>c.GabardinaEstampadaComponent)
            },
            {
                path:'gabardina-lisa',
                loadComponent:() => import('./fabrics/pages/gabardina-lisa/gabardina-lisa.component').then(c=>c.GabardinaLisaComponent)
            },
            {
                path:'charol-liso',
                loadComponent:() => import('./fabrics/pages/charol-liso/charol-liso.component').then(c=>c.CharolLisoComponent)
            },
            {
                path:'charol-croco',
                loadComponent:() => import('./fabrics/pages/charol-croco/charol-croco.component').then(c=>c.CharolCrocoComponent)
            },
            {
                path:'praga',
                loadComponent:() => import('./fabrics/pages/praga/praga.component').then(c=>c.PragaComponent)
            }

        ]
    },
    {
        path:'',
        redirectTo:'telas',
        pathMatch:'full'
    }
]
