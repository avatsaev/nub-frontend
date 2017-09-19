import { Component, OnInit } from '@angular/core';
import {SnippetsService} from '../../../core/services/snippets/snippets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-snippet',
  templateUrl: './new-snippet.component.html',
  styleUrls: ['./new-snippet.component.css']
})
export class NewSnippetComponent implements OnInit {

  constructor(private snippetService: SnippetsService, private router: Router) { }

  ngOnInit() {
  }

  onSnippetSubmit(snippet) {

    this.snippetService.create(snippet).subscribe(res => {
      console.log(res);

      if (res) {
        this.router.navigate(['/snippets', res.id]);
      }

    });

  }

  onSnippetCancel() {
    this.router.navigate(['/']);
  }

}
