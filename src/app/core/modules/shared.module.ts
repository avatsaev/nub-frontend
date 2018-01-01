import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SnippetComponent} from '../components/snippet/snippet.component';
import {SnippetsService} from '../services/snippets/snippets.service';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {CodeMirrorDirective} from '../directives/codemirror.directive';
import {SnippetFormComponent} from '../components/snippet-form/snippet-form.component';
import {HeaderComponent} from '../components/header/header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {environment} from '../../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
  ],
  declarations: [
    CodeMirrorDirective,
    SnippetComponent,
    HeaderComponent,
    SnippetFormComponent
  ],
  exports: [
    CodeMirrorDirective,
    SnippetComponent,
    HeaderComponent,
    SnippetFormComponent,
    ApolloModule,
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
      link: httpLink.create({uri: environment.nubApi.baseUrl}),
      cache: new InMemoryCache()
    });

  }
}
