import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaconPage } from './bacon.page';

const routes: Routes = [
  {
    path: '',
    component: BaconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaconPageRoutingModule {}
