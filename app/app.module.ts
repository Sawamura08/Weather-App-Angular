import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoordinatesInfoComponent } from "./coordinates-info/coordinates-info.component";
import { WeatherInfoComponent } from "./weather-info/weather-info.component";
import { TemperatureInfoComponent } from "./temperature-info/temperature-info.component";
import { MinMaxTempInfoComponent } from "./min-max-temp-info/min-max-temp-info.component";
import { PressureInfoComponent } from "./pressure-info/pressure-info.component";
import { HumidityInfoComponent } from "./humidity-info/humidity-info.component";
import { SunriseInfoComponent } from "./sunrise-info/sunrise-info.component";
import { SunsetInfoComponent } from './sunset-info/sunset-info.component';
import { WindInfoComponent } from './wind-info/wind-info.component';

@NgModule({
	declarations: [
		AppComponent,
		CoordinatesInfoComponent,
		WeatherInfoComponent,
		TemperatureInfoComponent,
		MinMaxTempInfoComponent,
		PressureInfoComponent,
		HumidityInfoComponent,
		SunriseInfoComponent,
  SunsetInfoComponent,
  WindInfoComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
