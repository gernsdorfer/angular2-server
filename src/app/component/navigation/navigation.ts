import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navigation',
    styles: [require("./navi.scss")],
    template: require("./navigation.html"),
    directives: [
        ...ROUTER_DIRECTIVES
    ]
})
export class Navigation {
}
