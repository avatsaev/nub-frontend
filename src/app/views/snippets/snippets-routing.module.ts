import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnippetsComponent} from './snippets.component';
import {SnippetDetailsComponent} from './snippet-details/snippet-details.component';
import {NewSnippetComponent} from './new-snippet/new-snippet.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetsComponent,
    children: [
      { path: 'new', component: NewSnippetComponent},
      { path: ':id', component: SnippetDetailsComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SnippetsRoutingModule { }
