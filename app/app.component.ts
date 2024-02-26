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

	ngOnInit(): void {
		this.manageApi.getApiData().subscribe((objectData) => {
			this.data = objectData;
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

	clearInputBox() {
		this.search = "";
	}
}
