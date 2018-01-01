import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import * as snippetsQueries from '../../queries/snippets';

import {Snippet} from '../../models/snippet';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class SnippetsService {

  constructor(private apollo: Apollo) {}

  index() {

    return this.apollo.query({
      query: snippetsQueries.GET_ALL
    }).pipe(
      tap(console.log),
      map(res => res.data.getSnippets)
    );
  }


  show(id: string) {

    return this.apollo.query({
      query: snippetsQueries.GET_BY_ID,
      variables: {id}
    }).pipe(
      tap(console.log),
      map(res => res.data.getSnippetById)
    );
  }

  create(snippet: Snippet) {
    return this.apollo.mutate({
      mutation: snippetsQueries.CREATE,
      variables: {...snippet}
    }).pipe(
      tap(console.log),
      map(res => res.data)
    );
  }

}
