import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodemirrorDirective} from '../directives/codemirror.directive';
import {SnippetComponent} from '../components/snippet/snippet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodemirrorDirective, SnippetComponent],
  exports: [CodemirrorDirective, SnippetComponent]
})
export class SharedModule { }
