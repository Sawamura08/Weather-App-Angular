import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-sunset-info",
	templateUrl: "./sunset-info.component.html",
	styleUrls: ["./sunset-info.component.scss"],
})
export class SunsetInfoComponent implements OnChanges {
	@Input() sunset: any;

	sunsetInfo: any;
	sunsetTime: any;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["sunset"] && changes["sunset"].currentValue) {
			this.sunsetInfo = changes["sunset"].currentValue.sys.sunset;

			this.sunsetTime = new Date(this.sunsetInfo * 1000);
		}
	}
}
