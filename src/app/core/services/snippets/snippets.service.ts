import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ISnippet} from '../../models/snippet';

import 'rxjs/add/operator/map';


@Injectable()
export class SnippetsService {

  constructor(private http: HttpClient) {}

  index(): Observable<ISnippet[]> {
    return this.http
        .get<ISnippet[]>(environment.nubApi.baseUrl + 'snippets');
  }

  create(snippet): Observable<ISnippet> {
    return this.http
        .post<ISnippet>(environment.nubApi.baseUrl + 'snippets', snippet);
  }

  show(id: string): Observable<ISnippet> {
    return this.http
        .get<{data: ISnippet}>(environment.nubApi.baseUrl + 'snippets/' + id)
        .map(res => res.data);
  }

}
