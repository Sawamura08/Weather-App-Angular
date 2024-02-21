import { Component, Input } from "@angular/core";

@Component({
	selector: "app-api-info",
	templateUrl: "./api-info.component.html",
	styleUrls: ["./api-info.component.scss"],
})
export class ApiInfoComponent {
	@Input() data: any;
}
