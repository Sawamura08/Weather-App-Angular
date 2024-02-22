import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-temperature-info",
	templateUrl: "./temperature-info.component.html",
	styleUrls: ["./temperature-info.component.scss"],
})
export class TemperatureInfoComponent implements OnChanges {
	@Input() temperatureInfo: any;

	mainData: any;
	mainTemp: number = 0;
	mainFeels: number = 0;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["temperatureInfo"] && changes["temperatureInfo"].currentValue) {
			this.mainData = changes["temperatureInfo"].currentValue.main;

			if (this.mainData) {
				this.mainTemp = this.mainData.temp - 273.15;
				this.mainFeels = this.mainData.feels_like - 273.15;
			}
		}
	}
}
