import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ISnippet} from '../../models/snippet';

@Injectable()
export class SnippetsService {

  constructor(private http: HttpClient) {

  }

  index(): Observable<ISnippet[]> {
    return this.http.get<ISnippet[]>(environment.nubApi.baseUrl + 'snippets');
  }

  create(snippet): Observable<ISnippet> {
    return this.http.post<ISnippet>(environment.nubApi.baseUrl + 'snippets', snippet);
  }

}
