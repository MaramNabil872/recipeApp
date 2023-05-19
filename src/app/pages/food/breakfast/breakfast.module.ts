import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastPageRoutingModule } from './breakfast-routing.module';

import { BreakfastPage } from './breakfast.page';
import { CustomFilterPipe } from 'src/app/pipes/custom-filter-pipe.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakfastPageRoutingModule,

  ],
  declarations: [BreakfastPage,CustomFilterPipe]
})
export class BreakfastPageModule {}
