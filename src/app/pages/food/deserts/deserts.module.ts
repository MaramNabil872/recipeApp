import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesertsPageRoutingModule } from './deserts-routing.module';

import { DesertsPage } from './deserts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesertsPageRoutingModule
  ],
  declarations: [DesertsPage]
})
export class DesertsPageModule {}
