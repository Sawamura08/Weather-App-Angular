import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-humidity-info",
	templateUrl: "./humidity-info.component.html",
	styleUrls: ["./humidity-info.component.scss"],
})
export class HumidityInfoComponent implements OnChanges {
	@Input() humidity: any;

	humidityInfo: any;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["humidity"] && changes["humidity"].currentValue) {
			this.humidityInfo = changes["humidity"].currentValue.main.humidity;
		}
	}
}
