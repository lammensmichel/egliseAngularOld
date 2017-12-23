import { HttpModule } from '@angular/http';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterDefuntPipe } from './filtre/filterDefunt.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { AjouterDefuntComponent } from './ajouter-defunt/ajouter-defunt.component';
import { ListDefuntComponent } from './list-defunt/list-defunt.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component : AccueilComponent},
  {path: 'horaires', component : HorairesComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'ajouterDefunt', component : AjouterDefuntComponent },
  {path: 'listeDefunt', component : ListDefuntComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent,
    FooterComponent,
    ContactComponent,
    HorairesComponent,
    AjouterDefuntComponent,
    ListDefuntComponent,
    FilterDefuntPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
