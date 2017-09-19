import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {ISnippet} from '../../../core/models/snippet';
import {SnippetsService} from '../../../core/services/snippets/snippets.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-snippet-details',
  templateUrl: './snippet-details.component.html',
  styleUrls: ['./snippet-details.component.css']
})
export class SnippetDetailsComponent implements OnInit {


  snippet$: Observable<ISnippet>;

  constructor(
      private actRoute: ActivatedRoute,
      private snippetsService: SnippetsService
  ) { }

  ngOnInit() {

    this.snippet$ = this.actRoute.params
        .switchMap(params => this.snippetsService.show(params['id']));
  }

}
