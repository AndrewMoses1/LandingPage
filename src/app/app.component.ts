import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { animations1 } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animations1]
})
export class AppComponent {
  title = 'minlandingpage';
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}