import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodemirrorDirective} from '../directives/codemirror.directive';
import {SnippetComponent} from '../components/snippet/snippet.component';
import {SnippetsService} from '../services/snippets/snippets.service';
import {ApolloModule} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodemirrorDirective, SnippetComponent, ToolbarComponent],
  exports: [
    CodemirrorDirective,
    SnippetComponent,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    ToolbarComponent
  ],
  providers: [
    SnippetsService
  ]
})
export class SharedModule { }
