"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var FilterDefuntPipe = (function () {
    function FilterDefuntPipe() {
    }
    FilterDefuntPipe.prototype.transform = function (items, searchText) {
        items = searchText.nom ? items.filter(function (t) { return t.nom.toLocaleLowerCase().includes(searchText.nom.toLocaleLowerCase()); }) : items;
        items = searchText.prenom ? items.filter(function (t) { return t.prenom.toLocaleLowerCase().includes(searchText.prenom.toLocaleLowerCase()); }) : items;
        items = searchText.dateDuDeces ?
            items.filter(function (t) { return moment(t.dateDuDeces).format('YYYY-MM-DD') === moment(searchText.dateDuDeces).format('YYYY-MM-DD'); }) : items;
        items = searchText.dateDesFunerailles ?
            // tslint:disable-next-line:max-line-length
            items.filter(function (t) { return moment(t.dateDesFunerailles).format('YYYY-MM-DD') === moment(searchText.dateDesFunerailles).format('YYYY-MM-DD'); }) : items;
        return items;
    };
    FilterDefuntPipe = __decorate([
        core_1.Pipe({
            name: 'filterDefunt'
        })
    ], FilterDefuntPipe);
    return FilterDefuntPipe;
}());
exports.FilterDefuntPipe = FilterDefuntPipe;
//# sourceMappingURL=filterDefunt.pipe.js.map