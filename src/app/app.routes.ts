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
        path: 'decre8',
        loadComponent: () => import('./leyes/decre8/decre8.component')
      },
      {
        path: 'decre9',
        loadComponent: () => import('./leyes/decre9/decre9.component')
      },
      {
        path: 'decre10',
        loadComponent: () => import('./leyes/decre10/decre10.component')
      },
      {
        path: 'decre11',
        loadComponent: () => import('./leyes/decre11/decre11.component')
      },
      {
        path: 'decre12',
        loadComponent: () => import('./leyes/decre12/decre12.component')
      },
      {
        path: 'anexo2',
        loadComponent: () => import('./leyes/anexo2/anexo2.component')
      },
      {
        path: 'anexo3',
        loadComponent: () => import('./leyes/anexo3/anexo3.component')
      },
      {
        path: 'anexo4',
        loadComponent: () => import('./leyes/anexo4/anexo4.component')
      },
      {
        path: 'anexo5',
        loadComponent: () => import('./leyes/anexo5/anexo5.component')
      },
      {
        path: 'anexo6',
        loadComponent: () => import('./leyes/anexo6/anexo6.component')
      },
      {
        path: 'anexo7',
        loadComponent: () => import('./leyes/anexo7/anexo7.component')
      },
      {
        path: 'anexo8',
        loadComponent: () => import('./leyes/anexo8/anexo8.component')
      },
      {
        path: 'anexo9',
        loadComponent: () => import('./leyes/anexo9/anexo9.component')
      },
      {
        path: 'anexo10',
        loadComponent: () => import('./leyes/anexo10/anexo10.component')
      },
      {
        path: 'anexo11',
        loadComponent: () => import('./leyes/anexo11/anexo11.component')
      },
      {
        path: 'anexo12',
        loadComponent: () => import('./leyes/anexo12/anexo12.component')
      },
      {
        path: 'anexo13',
        loadComponent: () => import('./leyes/anexo13/anexo13.component')
      },
      {
        path: 'anexo14',
        loadComponent: () => import('./leyes/anexo14/anexo14.component')
      },
      {
        path: 'anexo15',
        loadComponent: () => import('./leyes/anexo15/anexo15.component')
      },
      {
        path: 'anexo16',
        loadComponent: () => import('./leyes/anexo16/anexo16.component')
      },
      {
        path: 'anexo17',
        loadComponent: () => import('./leyes/anexo17/anexo17.component')
      },
      {
        path: 'anexo18',
        loadComponent: () => import('./leyes/anexo18/anexo18.component')
      },
      {
        path: 'anexo19',
        loadComponent: () => import('./leyes/anexo19/anexo19.component')
      },
      {
        path: 'anexo20',
        loadComponent: () => import('./leyes/anexo20/anexo20.component')
      },
      {
        path: 'anexo21',
        loadComponent: () => import('./leyes/anexo21/anexo21.component')
      },
      {
        path: 'anexo22',
        loadComponent: () => import('./leyes/anexo22/anexo22.component')
      },
      {
        path: 'anexo23',
        loadComponent: () => import('./leyes/anexo23/anexo23.component')
      },
      {
        path: 'anexo24',
        loadComponent: () => import('./leyes/anexo24/anexo24.component')
      },
      {
        path: 'anexo25',
        loadComponent: () => import('./leyes/anexo25/anexo25.component')
      },
      {
        path: 'anexo26',
        loadComponent: () => import('./leyes/anexo26/anexo26.component')
      },
      {
        path: 'anexo27',
        loadComponent: () => import('./leyes/anexo27/anexo27.component')
      },
      {
        path: 'anexo28',
        loadComponent: () => import('./leyes/anexo28/anexo28.component')
      },
      {
        path: 'anexo29',
        loadComponent: () => import('./leyes/anexo29/anexo29.component')
      },
      {
        path: 'anexo30',
        loadComponent: () => import('./leyes/anexo30/anexo30.component')
      },
      {
        path: 'decre13',
        loadComponent: () => import('./leyes/decre13/decre13.component')
      },
      {
        path: 'reso1',
        loadComponent: () => import('./leyes/reso1/reso1.component')
      },
      {
        path: 'leyhd',
        loadComponent: () => import('./leyes/leyhd/leyhd.component')
      },
      {
        path: 'leynav',
        loadComponent: () => import('./leyes/leynav/leynav.component')
      },
      {
        path: 'leyiss',
        loadComponent: () => import('./leyes/leyiss/leyiss.component')
      },
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      }
    ]
  }
];
