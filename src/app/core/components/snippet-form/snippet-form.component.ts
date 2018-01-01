import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Snippet} from '../../models/snippet';
import {CodeMirrorDirective} from '../../directives/codemirror.directive';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})
export class SnippetFormComponent implements OnInit {

  @Input() snippet: Snippet = {
    content: '',
    description: '',
    name: ''
  };

  @ViewChild(CodeMirrorDirective) editor;

  @Output() onSubmit = new EventEmitter<Snippet>();
  @Output() onCancel = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {

    if (this.snippet.name.length && this.editor.editorRef.getValue().length) {
      this.snippet.content = this.editor.editorRef.getValue();
      this.onSubmit.emit({...this.snippet});
    }


  }

}
