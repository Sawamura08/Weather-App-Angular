import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: "app-generic-info",
	templateUrl: "./generic-info.component.html",
	styleUrls: ["./generic-info.component.scss"],
})
export class GenericInfoComponent implements OnChanges {
	@Input() place: any;
	@Input() mainTemp: any;
	@Input() weatherCondition: any;
	@Input() icon: any;

	temp: number = 0;
	imgPath: string = "";

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["mainTemp"] && changes["mainTemp"].currentValue) {
			this.temp = Math.round(changes["mainTemp"].currentValue.main.temp - 273.15);
		}

		if (changes["icon"] && changes["icon"].currentValue) {
			this.imgPath = changes["icon"].currentValue.weather[0].icon;
			this.imgPath = `https://openweathermap.org/img/wn/${this.imgPath}@2x.png`;
		}
	}
}
