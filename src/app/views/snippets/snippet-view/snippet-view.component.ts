import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {SnippetsService} from '../../../core/services/snippets/snippets.service';
import {Snippet} from '../../../core/models/snippet';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-nub-view',
  templateUrl: './snippet-view.component.html',
  styleUrls: ['./snippet-view.component.scss']
})
export class SnippetViewComponent implements OnInit {

  snippet$: Observable<Snippet>;

  constructor(private route: ActivatedRoute, private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.snippet$ = this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.snippetsService.show(id))
    );
  }

}
