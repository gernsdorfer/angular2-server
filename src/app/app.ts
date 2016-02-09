import {Component, Directive, ElementRef, Renderer} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from "./component/home/home";
import {About} from "./component/about/about";
import {Navi} from "./component/navi/navi";

@Component({
    selector: 'app',
    directives: [
        ...ROUTER_DIRECTIVES,
        Navi
    ],
    styles: [`
    .router-link-active {
      background-color: lightgray;
    }
  `],
    template: `
  <div>
    <navi></navi>
    <div>
      <span>Hello, {{ name }}!</span>
    </div>

    name: <input type="text" [value]="name" (input)="name = $event.target.value" autofocus>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'}
])
export class App {
    name:string = 'Angular 2';
}

console.log('OK');
