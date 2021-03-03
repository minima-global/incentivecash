import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardsPage } from './rewards.page';

const routes: Routes = [
  {
    path: '',
    component: RewardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardsPageRoutingModule {}
