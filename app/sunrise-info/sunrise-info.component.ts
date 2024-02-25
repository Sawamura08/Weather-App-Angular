import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-sunrise-info",
	templateUrl: "./sunrise-info.component.html",
	styleUrls: ["./sunrise-info.component.scss"],
})
export class SunriseInfoComponent implements OnChanges {
	@Input() sunrise: any;

	sunriseInfo: number = 0;
	sunriseDate: any;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["sunrise"] && changes["sunrise"].currentValue) {
			this.sunriseInfo = changes["sunrise"].currentValue.sys.sunrise;

			this.sunriseDate = new Date(this.sunriseInfo * 1000);
		}
	}
}
