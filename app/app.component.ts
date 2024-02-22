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

	ngOnInit(): void {
		this.manageApi.getApiData().subscribe((objectData) => {
			this.data = objectData;
		});
	}

	sendSearchToService() {
		this.search = "";
	}
}
