import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ManageApiDataService {
	constructor(private http: HttpClient) {}

	private apiUrl =
		"https://api.openweathermap.org/data/2.5/weather?q=Manila,608&appid=1a0e5007a0bcd003c175281712f17380";

	setSearchDataToUrl(searchData: string) {
		this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchData},608&appid=1a0e5007a0bcd003c175281712f17380`;
	}

	getApiData(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}
}
