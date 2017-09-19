import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import {SharedModule} from '../../core/modules/shared.module';
import { SnippetDetailsComponent } from './snippet-details/snippet-details.component';
import {NewSnippetComponent} from './new-snippet/new-snippet.component';
import {SnippetsRoutingModule} from './snippets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SnippetsRoutingModule
  ],
  declarations: [SnippetsComponent, SnippetDetailsComponent, NewSnippetComponent]
})
export class SnippetsModule { }
