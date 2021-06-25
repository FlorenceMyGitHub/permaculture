import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Page } from '../tab2.page';

import { VarietesPage } from './varietes.page';

const routes: Routes = [
  {
    path: '',
    component: VarietesPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarietesPageRoutingModule {}
