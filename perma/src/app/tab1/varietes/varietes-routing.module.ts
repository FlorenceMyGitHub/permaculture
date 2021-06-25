import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarietesPage } from './varietes.page';

const routes: Routes = [
  {
    path: '',
    component: VarietesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarietesPageRoutingModule {}
