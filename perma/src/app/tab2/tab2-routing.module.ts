import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VarietesPageModule } from '../tab1/varietes/varietes.module';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  /*  children: [
      { path: 'varietes/:level', loadChildren: () => import('../content/content.module').then( m => m.ContentPageModule)}
    ]*/
 /*   children: [
      { path: 'varietes/:level', loadChildren: () => import('./varietes/varietes.module').then( m => m.VarietesPageModule)}
    ]*/
  },
  {
    path: 'vari',
    component: VarietesPageModule,
    loadChildren: () => import('./varietes/varietes.module').then( m => m.VarietesPageModule),
    redirectTo: 'varietes/0',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
