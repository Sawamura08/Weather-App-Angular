import { Component, OnInit } from "@angular/core";
import { ManageApiDataService } from "./service/manage-api-data.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	constructor(private manageApi: ManageApiDataService) {}
	title = "weatherapp";

	search: string = "Manila";
	data: any;
	getDate: any;
	mainTemp: number = 0;
	place: string = "";

	ngOnInit(): void {
		this.manageApi.getApiData().subscribe((objectData) => {
			this.data = objectData;

			this.mainTemp = Math.round(this.data.main.temp - 271.15);
			this.place = this.data.name;
		});

		setInterval(() => {
			this.getDate = new Date();
		});
	}

	sendSearchToService() {
		this.manageApi.setSearchDataToUrl(this.search);

		this.manageApi.getApiData().subscribe((objectData) => {
			this.data = objectData;
		});
		this.search = "";
	}
}
