import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaconPageRoutingModule } from './bacon-routing.module';

import { BaconPage } from './bacon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaconPageRoutingModule
  ],
  declarations: [BaconPage]
})
export class BaconPageModule {}
