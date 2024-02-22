import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
	selector: "app-min-max-temp-info",
	templateUrl: "./min-max-temp-info.component.html",
	styleUrls: ["./min-max-temp-info.component.scss"],
})
export class MinMaxTempInfoComponent implements OnChanges {
	@Input() minMax: any;

	minMaxTemp: any;
	minTemp: number = 0;
	maxTemp: number = 0;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["minMax"] && changes["minMax"].currentValue) {
			this.minMaxTemp = changes["minMax"].currentValue.main;

			if (this.minMaxTemp) {
				this.minTemp = this.minMaxTemp.temp_min - 273.15;
				this.maxTemp = this.minMaxTemp.temp_max - 273.15;
			}
		}
	}
}
