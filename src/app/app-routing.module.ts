import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./jav-baru/jav-baru.module').then(m => m.JavBaruModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top',  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
