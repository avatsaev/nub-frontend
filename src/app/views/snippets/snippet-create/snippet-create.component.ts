import {Component, HostBinding, OnInit} from '@angular/core';
import {Snippet} from '@app/core/models/snippet';
import {SnippetsService} from '@app/core/services/snippets/snippets.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nub-create',
  templateUrl: './snippet-create.component.html',
  styleUrls: ['./snippet-create.component.scss'],

})
export class SnippetCreateComponent implements OnInit {

  @HostBinding('class.section') container = true

  constructor(private snippetsService: SnippetsService, private router: Router) { }

  ngOnInit() {}

  onCreate(snippet: Snippet) {
    this.snippetsService.create(snippet).subscribe(res => {
      console.log(res)
      if (res.id) {
        this.router.navigate(['/snippets', res.id]);
      }
    });
  }

}
