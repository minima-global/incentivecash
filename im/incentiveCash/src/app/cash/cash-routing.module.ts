import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashPage } from './cash.page';

const routes: Routes = [
  {
    path: '',
    component: CashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashPageRoutingModule {}
