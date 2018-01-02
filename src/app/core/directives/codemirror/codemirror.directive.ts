
import {EditorFromTextArea, EditorConfiguration, fromTextArea} from 'codemirror';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[codemirror]'
})

export class CodeMirrorDirective implements OnInit, OnChanges {


  private readonly _defaultConfig = {
    lineNumbers: true,
    mode: 'javascript'
  };

  @Input() content: string;
  @Input() config: EditorConfiguration = this._defaultConfig;
  @Output() onChange = new EventEmitter<{editorInstance: any, changes: any}>();
  editorRef: EditorFromTextArea;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.editorRef = fromTextArea(this.element.nativeElement, {...this._defaultConfig, ...this.config});
    this.editorRef.setValue(this.content);
    this.editorRef.on(
        'change',
        (cmInstance, event) => this.onChange.emit({
          editorInstance: cmInstance,
          changes: event
        })
      );
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.editorRef) {
      if (changes.content) {
        this.editorRef.setValue(this.content);
      }
      if (changes.config) {
        Object.keys(this.config).map(k => this.editorRef.setOption(k, this.config[k]));
      }
    }
  }

  getContent(): string {
    return this.editorRef.getValue();
  }

  setOption(key: string, value: any) {
    this.editorRef.setOption(key, value);
  }

}
