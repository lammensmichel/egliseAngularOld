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
var forms_1 = require("@angular/forms");
var defunt_service_1 = require("../service/defunt.service");
var router_1 = require("@angular/router");
var moment = require("moment");
var AjouterDefuntComponent = (function () {
    function AjouterDefuntComponent(formBuilder, defuntService, route) {
        this.formBuilder = formBuilder;
        this.defuntService = defuntService;
        this.route = route;
        this.myForm = formBuilder.group({
            'prenom': new forms_1.FormControl(),
            'nom': new forms_1.FormControl(),
            'epouxEpouse': new forms_1.FormControl(),
            'dateDuDeces': new forms_1.FormControl(),
            'lieuDuDeces': new forms_1.FormControl(),
            'dateDeNaissance': new forms_1.FormControl(),
            'lieuDeNaissance': new forms_1.FormControl(),
            'dateDesFunerailles': new forms_1.FormControl(),
            'lieuDeDepart': new forms_1.FormControl(),
            'heureDeDepart': new forms_1.FormControl(),
            'egliseDe': new forms_1.FormControl(),
            'heureDeLaMesse': new forms_1.FormControl(),
            'crematorium': new forms_1.FormControl(),
            'heureCrematorium': new forms_1.FormControl(),
            'cimetiere': new forms_1.FormControl(),
            'heureCimetiere': new forms_1.FormControl()
        });
    }
    AjouterDefuntComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.defuntService.getHttpOne("http://localhost:3000/Defunt/" + this.id).subscribe(function (result) {
                _this.myForm = _this.formBuilder.group({
                    'prenom': result.prenom ? result.prenom : new forms_1.FormControl(),
                    'nom': result.nom ? result.nom : new forms_1.FormControl(),
                    'epouxEpouse': result.epouxEpouse ? result.epouxEpouse : new forms_1.FormControl(),
                    'dateDuDeces': result.dateDuDeces ? new Date(result.dateDuDeces) : new forms_1.FormControl(),
                    'lieuDuDeces': result.lieuDuDeces ? result.lieuDuDeces : new forms_1.FormControl(),
                    'dateDeNaissance': result.dateDeNaissance ? new Date(result.dateDeNaissance) : new forms_1.FormControl(),
                    'lieuDeNaissance': result.lieuDeNaissance ? result.lieuDeNaissance : new forms_1.FormControl(),
                    'dateDesFunerailles': result.dateDesFunerailles ? new Date(result.dateDesFunerailles) : new forms_1.FormControl(),
                    'lieuDeDepart': result.lieuDeNaissance ? result.lieuDeDepart : new forms_1.FormControl(),
                    'heureDeDepart': result.heureDeDepart ? new Date(result.heureDeDepart) : new forms_1.FormControl(),
                    'egliseDe': result.egliseDe ? result.egliseDe : new forms_1.FormControl(),
                    'heureDeLaMesse': result.heureDeLaMesse ? new Date(result.heureDeLaMesse) : new forms_1.FormControl(),
                    'crematorium': result.crematorium ? result.crematorium : new forms_1.FormControl(),
                    'heureCrematorium': result.heureCrematorium ? new Date(result.heureCrematorium) : new forms_1.FormControl(),
                    'cimetiere': result.cimetiere ? result.cimetiere : new forms_1.FormControl(),
                    'heureCimetiere': result.heureDeDepart ? new Date(result.heureDeDepart) : new forms_1.FormControl()
                });
            });
        }
    };
    AjouterDefuntComponent.prototype.onSubmit = function (defunt) {
        defunt.heureDeDepart = defunt.heureDeDepart ? moment(defunt.heureDeDepart, 'HH:mm').toDate() : null;
        defunt.heureDeLaMesse = defunt.heureDeLaMesse ? moment(defunt.heureDeLaMesse, 'HH:mm').toDate() : null;
        defunt.heureCrematorium = defunt.heureCrematorium ? moment(defunt.heureCrematorium, 'HH:mm').toDate() : null;
        defunt.heureCimetiere = defunt.heureCimetiere ? moment(defunt.heureCimetiere, 'HH:mm').toDate() : null;
        if (this.id) {
            defunt._id = this.id;
            this.defuntService.postHttp('http://localhost:3000/Defunt', defunt).subscribe(function (e) { console.log(e); });
        }
        else {
            this.defuntService.putHttp('http://localhost:3000/Defunt', defunt).subscribe(function (e) { console.log(e); });
        }
        return false;
    };
    AjouterDefuntComponent = __decorate([
        core_1.Component({
            selector: 'app-ajouter-defunt',
            templateUrl: './ajouter-defunt.component.html',
            styleUrls: ['./ajouter-defunt.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, defunt_service_1.DefuntService, router_1.ActivatedRoute])
    ], AjouterDefuntComponent);
    return AjouterDefuntComponent;
}());
exports.AjouterDefuntComponent = AjouterDefuntComponent;
//# sourceMappingURL=ajouter-defunt.component.js.map