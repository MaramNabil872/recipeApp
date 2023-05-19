import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesertsPage } from './deserts.page';

const routes: Routes = [
  {
    path: '',
    component: DesertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesertsPageRoutingModule {}
