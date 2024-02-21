import { TestBed } from "@angular/core/testing";

import { ManageApiDataService } from "../service/manage-api-data.service";

describe("ManageApiDataService", () => {
	let service: ManageApiDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ManageApiDataService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
