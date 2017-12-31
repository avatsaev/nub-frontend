import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Snippet} from '../../models/snippet';

@Injectable()
export class SnippetsService {

  constructor(private http: HttpClient) {

  }

  index(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(environment.nubApi.baseUrl + 'snippets');
  }

  create(snippet): Observable<Snippet> {
    return this.http.post<Snippet>(environment.nubApi.baseUrl + 'snippets', snippet);
  }

}
