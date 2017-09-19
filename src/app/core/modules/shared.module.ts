import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeMirrorDirective} from '../directives/codemirror.directive';
import {SnippetComponent} from '../components/snippet/snippet.component';
import {SnippetsService} from '../services/snippets/snippets.service';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {FormsModule} from '@angular/forms';
import {SnippetFormComponent} from '../components/snippet-form/snippet-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CodeMirrorDirective, SnippetComponent, HeaderComponent, SnippetFormComponent],
  exports: [CodeMirrorDirective, SnippetComponent, HeaderComponent, SnippetFormComponent],
  providers: [
    SnippetsService
  ]
})
export class SharedModule { }
