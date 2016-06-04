import { Component } from "@angular/core";

import { TopNavComponent } from "../../widgets/top-nav";
import { BottomNavComponent } from "../../widgets/bottom-nav";


@Component({
    selector: "home",
    directives: [ TopNavComponent, BottomNavComponent ],
    template: require("./home.component.html"),
    styles: [ require("./home.component.css") ]
})
export class HomeComponent {
}
