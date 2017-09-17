import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

import {EditorFromTextArea, EditorConfiguration, fromTextArea} from 'codemirror';


@Directive({
  selector: '[codemirror]'
})
export class CodemirrorDirective implements OnInit {

  @Input() content: string;
  @Input() config?: EditorConfiguration;

  editorRef: EditorFromTextArea;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.editorRef = fromTextArea(this.elementRef.nativeElement, this.config);
    this.editorRef.setValue(this.content);
    //
    // this.editorRef.on('change', console.log);

  }



}
