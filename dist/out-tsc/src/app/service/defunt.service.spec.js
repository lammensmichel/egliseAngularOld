"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var defunt_service_1 = require("./defunt.service");
describe('DefuntService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [defunt_service_1.DefuntService]
        });
    });
    it('should be created', testing_1.inject([defunt_service_1.DefuntService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=defunt.service.spec.js.map