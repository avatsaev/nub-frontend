import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodemirrorDirective} from '../directives/codemirror.directive';
import {SnippetComponent} from '../components/snippet/snippet.component';
import {SnippetsService} from '../services/snippets/snippets.service';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {InMemoryCache} from 'apollo-cache-inmemory';

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
export class SharedModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {

    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({uri: 'https://api.graph.cool/simple/v1/cjautn90938rq0101b3dg4ti2' }),
      cache: new InMemoryCache()
    });

  }
}
