import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnippetListComponent} from './snippet-list/snippet-list.component';
import {SnippetCreateComponent} from './snippet-create/snippet-create.component';
import {SnippetViewComponent} from './snippet-view/snippet-view.component';
import {SnippetEditComponent} from './snippet-edit/snippet-edit.component';

const routes: Routes = [
  {path: '', component: SnippetListComponent},
  {path: 'new', component: SnippetCreateComponent},
  {path: ':id', component: SnippetViewComponent},
  {path: ':id/edit', component: SnippetEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
