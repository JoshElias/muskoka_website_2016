/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";


import { HomeComponent } from "../../pages/home";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: "app",
  pipes: [ ],
  providers: [ ROUTER_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require("./app.component.css") ],
  template: `
      <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {
      path: "/",
      name: "Home",
      component: HomeComponent,
      useAsDefault: true
  }
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  //{ path: '/about', name: 'About', loader: () => require('es6-promise!../../pages/about')('About') }
])
export class AppComponent {
  title = "Muskoka";
}
