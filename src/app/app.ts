import {Component, Directive, ElementRef, Renderer, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from "./component/home/home";
import {About} from "./component/about/about";
import {Navigation} from "./component/navigation/navigation";

@Component({
    selector: 'app',
    directives: [
        ...ROUTER_DIRECTIVES,
        Navigation
    ],
    styles: [require("./app.scss")],
    encapsulation: ViewEncapsulation.None,

    template: require("./app.html")
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'}
])
export class App {

}
