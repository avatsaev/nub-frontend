import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CodeMirrorDirective} from '@app/core/directives/codemirror/codemirror.directive';
import {SnippetComponent} from '@app/core/components/snippet/snippet.component';
import {HeaderComponent} from '@app/core/components/header/header.component';
import {SnippetFormComponent} from '@app/core/components/snippet-form/snippet-form.component';
import {SnippetListComponent} from '@app/core/components/snippet-list/snippet-list.component';
import {SnippetsService} from '@app/core/services/snippets/snippets.service';
import {environment} from '@app/env';

const components = [
  CodeMirrorDirective,
  SnippetComponent,
  HeaderComponent,
  SnippetFormComponent,
  SnippetListComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    SnippetsService
  ]
})
export class SharedModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {

    apollo.create({
      link: httpLink.create({uri: environment.nubApi.graphqlUrl}),
      cache: new InMemoryCache()
    });

  }
}
