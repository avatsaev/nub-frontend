import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
  selector: 'app-nub-create',
  templateUrl: './snippet-create.component.html',
  styleUrls: ['./snippet-create.component.scss'],

})
export class SnippetCreateComponent implements OnInit {

  @HostBinding('class.section') container = true

  constructor() { }

  ngOnInit() {}

}
