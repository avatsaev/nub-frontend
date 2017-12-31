import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NubListComponent} from './nub-list/nub-list.component';
import {NubCreateComponent} from './nub-create/nub-create.component';
import {NubViewComponent} from './nub-view/nub-view.component';
import {NubEditComponent} from './nub-edit/nub-edit.component';

const routes: Routes = [
  {path: '', component: NubListComponent},
  {path: 'new', component: NubCreateComponent},
  {path: ':id', component: NubViewComponent},
  {path: ':id/edit', component: NubEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NubsRoutingModule { }
