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
	noData: boolean = true;

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

		this.manageApi.getApiData().subscribe(
			(objectData) => {
				this.data = objectData;
			},
			(error) => {
				console.error("Error Fetching Data:", error);
				console.log("nodata");
				this.noData = false;
			}
		);
		this.search = "";
	}

	clearInputBox() {
		this.search = "";
	}
}
