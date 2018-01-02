"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var accueil_component_1 = require("./accueil/accueil.component");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination");
var angular_date_value_accessor_1 = require("angular-date-value-accessor");
var filterDefunt_pipe_1 = require("./filtre/filterDefunt.pipe");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var footer_component_1 = require("./footer/footer.component");
var contact_component_1 = require("./contact/contact.component");
var horaires_component_1 = require("./horaires/horaires.component");
var ajouter_defunt_component_1 = require("./ajouter-defunt/ajouter-defunt.component");
var list_defunt_component_1 = require("./list-defunt/list-defunt.component");
var defunt_service_1 = require("./service/defunt.service");
var routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: accueil_component_1.AccueilComponent },
    { path: 'horaires', component: horaires_component_1.HorairesComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'ajouterDefunt', component: ajouter_defunt_component_1.AjouterDefuntComponent },
    { path: 'listeDefunt', component: list_defunt_component_1.ListDefuntComponent },
    { path: 'modifierDefunt/:id', component: ajouter_defunt_component_1.AjouterDefuntComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                accueil_component_1.AccueilComponent,
                footer_component_1.FooterComponent,
                contact_component_1.ContactComponent,
                horaires_component_1.HorairesComponent,
                ajouter_defunt_component_1.AjouterDefuntComponent,
                list_defunt_component_1.ListDefuntComponent,
                filterDefunt_pipe_1.FilterDefuntPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ngx_pagination_1.NgxPaginationModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_date_value_accessor_1.DateValueAccessorModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            providers: [defunt_service_1.DefuntService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map