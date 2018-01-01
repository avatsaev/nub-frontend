import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <section class="hero is-info is-medium is-bold">
      <app-header></app-header>
    </section>


    <section class="container" >
      <router-outlet></router-outlet>
    </section>


    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/dansup/bulma-templates">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  `
})

export class AppComponent {}
