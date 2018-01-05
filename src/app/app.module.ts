import { HttpModule } from '@angular/http';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatFormFieldModule} from '@angular/material';
import 'hammerjs';

import { FilterDefuntPipe } from './filtre/filterDefunt.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { AjouterDefuntComponent } from './ajouter-defunt/ajouter-defunt.component';
import { ListDefuntComponent } from './list-defunt/list-defunt.component';
import { DefuntService } from './service/defunt.service';
import { LieuService } from './service/lieu.service';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component : AccueilComponent},
  {path: 'horaires', component : HorairesComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'ajouterDefunt', component : AjouterDefuntComponent },
  {path: 'listeDefunt', component : ListDefuntComponent },
  {path: 'modifierDefunt/:id', component: AjouterDefuntComponent },
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
    FilterDefuntPipe,
    DialogDeleteComponent
  ],
  entryComponents: [
    DialogDeleteComponent
  ],
  imports: [
  BrowserModule,
    NgxPaginationModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [
    DefuntService,
    LieuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
