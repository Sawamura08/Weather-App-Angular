import { Component, Input } from "@angular/core";

@Component({
	selector: "app-coordinates-info",
	templateUrl: "./coordinates-info.component.html",
	styleUrls: ["./coordinates-info.component.scss"],
})
export class CoordinatesInfoComponent {
	@Input() data: any;
}
