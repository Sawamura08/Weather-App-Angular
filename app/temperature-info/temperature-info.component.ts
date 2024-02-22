import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-temperature-info",
	templateUrl: "./temperature-info.component.html",
	styleUrls: ["./temperature-info.component.scss"],
})
export class TemperatureInfoComponent implements OnInit {
	@Input() temparatureInfo: any;

	mainTemp: any;

	ngOnInit(): void {
		this.mainTemp = this.temparatureInfo;
		console.log(this.temparatureInfo);
	}
}
