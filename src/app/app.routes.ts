// src/app/app-routing.module.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'panel',
        loadComponent: () => import('./leyes/panel/panel.component')
      },
      {
        path: 'leyes',
        loadComponent: () => import('./leyes/leyes/leyes.component')
      },
      {
        path: 'decretos',
        loadComponent: () => import('./leyes/decretos/decretos.component')
      },
      {
        path: 'reglas',
        loadComponent: () => import('./leyes/panel/panel.component')
      },
      {
        path: 'reglasycriterios',
        loadComponent: () => import('./leyes/reglasycriterios/reglasycriterios.component')
      },
      {
        path: 'reglasgenerales',
        loadComponent: () => import('./leyes/reglasgenerales/reglasgenerales.component')
      },
      {
        path: 'anexo1',
        loadComponent: () => import('./leyes/anexo1/anexo1.component')
      },
      {
        path: 'reglamentoley',
        loadComponent: () => import('./leyes/reglamentoley/reglamentoley.component')
      },
      {
        path: 'leyadua',
        loadComponent: () => import('./leyes/leyadua/leyadua.component')
      },

      {
        path: 'leyfpa',
        loadComponent: () => import('./leyes/leyfpa/leyfpa.component')
      },
      {
        path: 'ley27',
        loadComponent: () => import('./leyes/ley27/ley27.component')
      },
      {
        path: 'leyfdc',
        loadComponent: () => import('./leyes/leyfdc/leyfdc.component')
      },
      {
        path: 'ley-myza',
        loadComponent: () => import('./leyes/ley-myza/ley-myza.component')
      },
      {
        path: 'leyfpii',
        loadComponent: () => import('./leyes/leyfpii/leyfpii.component')
      },
      {
        path: 'leyarmas',
        loadComponent: () => import('./leyes/leyarmas/leyarmas.component')
      },
      {
        path: 'leyia',
        loadComponent: () => import('./leyes/leyia/leyia.component')
      },
      {
        path: 'decre',
        loadComponent: () => import('./leyes/decre/decre.component')
      },
      {
        path: 'leyat',
        loadComponent: () => import('./leyes/leyat/leyat.component')
      },
      {
        path: 'leyze',
        loadComponent: () => import('./leyes/leyze/leyze.component')
      },
      {
        path: 'leysv',
        loadComponent: () => import('./leyes/leysv/leysv.component')
      },
      {
        path: 'leyasp',
        loadComponent: () => import('./leyes/leyasp/leyasp.component')
      },
      {
        path: 'leypu',
        loadComponent: () => import('./leyes/leypu/leypu.component')
      },
      {
        path: 'leymaq',
        loadComponent: () => import('./leyes/leymaq/leymaq.component')
      },
      {
        path: 'leycam',
        loadComponent: () => import('./leyes/leycam/leycam.component')
      },
      {
        path: 'decre1',
        loadComponent: () => import('./leyes/decre1/decre1.component')
      },
      {
        path: 'decre2',
        loadComponent: () => import('./leyes/decre2/decre2.component')
      },
      {
        path: 'decre3',
        loadComponent: () => import('./leyes/decre3/decre3.component')
      },
      {
        path: 'decre4',
        loadComponent: () => import('./leyes/decre4/decre4.component')
      },
      {
        path: 'decre5',
        loadComponent: () => import('./leyes/decre5/decre5.component')
      },
      {
        path: 'decre6',
        loadComponent: () => import('./leyes/decre6/decre6.component')
      },
      {
        path: 'decre7',
        loadComponent: () => import('./leyes/decre7/decre7.component')
      },
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      }
    ]
  }
];
