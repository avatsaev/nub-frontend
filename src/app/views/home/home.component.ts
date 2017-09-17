import { Component, OnInit } from '@angular/core';
import {EditorConfiguration} from 'codemirror';
import {ISnippet} from '../../core/models/snippet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exampleSnippet: ISnippet = {
    filename: 'index.ts',
    content: 'class Greeter {\n' +
    '  greeting: string;\n' +
    '  constructor (message: string) {\n' +
    '    this.greeting = message;\n' +
    '  }\n' +
    '  greet() {\n' +
    '    return "Hello, " + this.greeting;\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'var greeter = new Greeter("world");\n' +
    '\n' +
    'var button = document.createElement(\'button\')\n' +
    'button.innerText = "Say Hello"\n' +
    'button.onclick = function() {\n' +
    '  alert(greeter.greet())\n' +
    '}\n' +
    '\n' +
    'document.body.appendChild(button)',
    mime: 'javascript',
    description: 'Lorem ipsum dolor'
  };


  exampleConfig: EditorConfiguration = {
    mode: 'javascript',
    lineNumbers: true,
    readOnly: true,
    viewportMargin: Infinity
  };

  constructor() { }

  ngOnInit() {
  }

}
