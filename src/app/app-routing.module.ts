import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerComponent } from './page/costumer/costumer.component';

const routes: Routes = [
  {path: 'customer', component: CostumerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
