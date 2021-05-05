import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'securities',
  pathMatch: 'full'
}, {
  path: 'securities',
  loadChildren: () => import('./pages/securities/securities.module').then(m => m.SecuritiesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
