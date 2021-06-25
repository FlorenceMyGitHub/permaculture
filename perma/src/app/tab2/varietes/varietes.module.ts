import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarietesPageRoutingModule } from './varietes-routing.module';

import { VarietesPage } from './varietes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarietesPageRoutingModule
  ],
  declarations: [VarietesPage]
})
export class VarietesPageModule {}
