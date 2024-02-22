import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoordinatesInfoComponent } from "./coordinates-info/coordinates-info.component";
import { WeatherInfoComponent } from "./weather-info/weather-info.component";
import { TemperatureInfoComponent } from "./temperature-info/temperature-info.component";

@NgModule({
	declarations: [
		AppComponent,
		CoordinatesInfoComponent,
		WeatherInfoComponent,
		TemperatureInfoComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
