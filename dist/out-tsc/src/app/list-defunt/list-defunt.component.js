"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Defunt_1 = require("../models/Defunt");
var DefuntSearch_1 = require("../models/DefuntSearch");
var defunt_service_1 = require("../service/defunt.service");
var ListDefuntComponent = (function () {
    function ListDefuntComponent(defuntService) {
        this.defuntService = defuntService;
        this.defunts = [];
        this.p = 1;
        this.searchText = new DefuntSearch_1.DefuntSearch();
    }
    ListDefuntComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defuntService.getHttp('http://localhost:3000/Defunt').subscribe(function (results) {
            _this.defunts = results;
        });
    };
    ListDefuntComponent.prototype.deleteDefunt = function (id) {
        var _this = this;
        var defunt = new Defunt_1.Defunt(id);
        this.defuntService.deleteHttp('http://localhost:3000/Defunt', defunt).subscribe(function (results) {
            _this.defunts = _this.defunts.filter(function (e) { return e._id !== id; });
            console.log(results);
        });
    };
    ListDefuntComponent = __decorate([
        core_1.Component({
            selector: 'app-list-defunt',
            templateUrl: './list-defunt.component.html',
            styleUrls: ['./list-defunt.component.css']
        }),
        __metadata("design:paramtypes", [defunt_service_1.DefuntService])
    ], ListDefuntComponent);
    return ListDefuntComponent;
}());
exports.ListDefuntComponent = ListDefuntComponent;
//# sourceMappingURL=list-defunt.component.js.map