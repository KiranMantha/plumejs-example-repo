import { Component } from '@plumejs/core';
import { CurrentRoute, Router } from '@plumejs/router';

@Component({
  selector: 'app-slug',
  deps: [Router]
})
export class SlugComponent {
  constructor(private router: Router) {}
  routeInfo: CurrentRoute;
  beforeMount() {
    this.router.getCurrentRoute().subscribe((routeInfo) => {
      this.routeInfo = routeInfo;
    });
  }

  render() {
    return `<pre>
        <code>${JSON.stringify(this.routeInfo, null, 2)}</code>
    </pre>
    <div>hi i'm slug</div>`;
  }
}
