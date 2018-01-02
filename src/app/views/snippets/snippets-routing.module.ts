import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnippetCreateComponent} from '@app/views/snippets/snippet-create/snippet-create.component';
import {SnippetViewComponent} from '@app/views/snippets/snippet-view/snippet-view.component';
import {SnippetEditComponent} from '@app/views/snippets/snippet-edit/snippet-edit.component';



const routes: Routes = [
  {path: '', redirectTo: 'new'},
  {path: 'new', component: SnippetCreateComponent},
  {path: ':id', component: SnippetViewComponent},
  {path: ':id/edit', component: SnippetEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
