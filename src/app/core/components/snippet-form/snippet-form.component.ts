import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

import {Snippet} from '../../models/snippet';
import {CodeMirrorDirective} from '../../directives/codemirror.directive';
import * as mime from 'mime-types';

@Component({
  selector: 'app-snippet-form',
  templateUrl: './snippet-form.component.html',
  styleUrls: ['./snippet-form.component.css']
})

export class SnippetFormComponent {

  @Input() snippet: Snippet = {
    content: '',
    description: '',
    name: ''
  };

  @ViewChild(CodeMirrorDirective) editor;

  @Output() onSubmit = new EventEmitter<Snippet>();
  @Output() onCancel = new EventEmitter<void>();


  setMime() {
    this.snippet.mime = mime.lookup(this.snippet.name);
  }

  onFormSubmit() {

    if (this.snippet.name.length && this.editor.editorRef.getValue().length) {
      this.snippet.content = this.editor.editorRef.getValue();
      this.onSubmit.emit({...this.snippet});
    }

  }

}
