import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-pressure-info",
	templateUrl: "./pressure-info.component.html",
	styleUrls: ["./pressure-info.component.scss"],
})
export class PressureInfoComponent implements OnChanges {
	@Input() pressure: any;

	pressureInfo: number = 0;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["pressure"] && changes["pressure"].currentValue) {
			this.pressureInfo = changes["pressure"].currentValue.main.pressure;
		}
	}
}
