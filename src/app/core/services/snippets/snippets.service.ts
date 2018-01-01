import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {ALL_SNIPPETS, CREATE_SNIPPET} from '../../queries/snippets';
import {Snippet} from '../../models/snippet';
import {map, tap} from 'rxjs/operators';


@Injectable()
export class SnippetsService {

  constructor(private apollo: Apollo) {}


  index() {
    return this.apollo.query({query: ALL_SNIPPETS}).pipe(
      tap(console.log),
      map(res => res.data)
    );

  }

  create(snippet: Snippet) {
    return this.apollo.mutate({
      mutation: CREATE_SNIPPET,
      variables: {...snippet}
    });
  }

}
