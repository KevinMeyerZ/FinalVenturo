import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFinalComponent } from './test-final/test-final.component';


const routes: Routes = [
  {
    path: '',
    component: TestFinalComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BTugasRoutingModule { }
