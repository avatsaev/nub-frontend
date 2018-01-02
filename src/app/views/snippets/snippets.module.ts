import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SnippetCreateComponent} from './snippet-create/snippet-create.component';
import {SnippetViewComponent} from './snippet-view/snippet-view.component';
import {SnippetEditComponent} from './snippet-edit/snippet-edit.component';
import {SnippetsRoutingModule} from './snippets-routing.module';
import {SharedModule} from '../../core/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    SharedModule
  ],
  declarations: [
    SnippetCreateComponent,
    SnippetViewComponent,
    SnippetEditComponent
  ]
})
export class SnippetsModule { }
