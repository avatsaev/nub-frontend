import {Component, Input, OnInit} from '@angular/core';
import {EditorConfiguration} from 'codemirror';
import {ISnippet} from '../../models/snippet';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  @Input() snippet: ISnippet;
  @Input() config: EditorConfiguration;

  constructor() { }

  ngOnInit() {
  }

}
