import { ResultComponent } from './result/result.component';
import { AgeComponent } from './age/age.component';
import { NameComponent } from './name/name.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'name',
    pathMatch: 'full'
  },
  {
    path: 'name',
    component: NameComponent
  },
  {
    path: 'age/:name',
    component: AgeComponent
  },
  {
    path: 'result/:name/:age',
    component: ResultComponent
  },
  {
    path: '**',
    redirectTo: 'name'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
