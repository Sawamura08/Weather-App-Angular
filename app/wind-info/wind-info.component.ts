import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-wind-info",
	templateUrl: "./wind-info.component.html",
	styleUrls: ["./wind-info.component.scss"],
})
export class WindInfoComponent implements OnChanges {
	@Input() winds: any;

	windInfo: any;
	speed: number = 0;
	deg: number = 0;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["winds"] && changes["winds"].currentValue) {
			this.windInfo = changes["winds"].currentValue.wind;

			if (this.windInfo) {
				this.speed = this.windInfo.speed;
				this.deg = this.windInfo.deg;
			}
		}
	}
}
