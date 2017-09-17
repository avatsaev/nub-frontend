import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodemirrorDirective} from '../directives/codemirror.directive';
import {SnippetComponent} from '../components/snippet/snippet.component';
import {SnippetsService} from '../services/snippets/snippets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodemirrorDirective, SnippetComponent],
  exports: [CodemirrorDirective, SnippetComponent],
  providers: [
    SnippetsService
  ]
})
export class SharedModule { }
