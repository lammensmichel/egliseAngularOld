import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Defunt } from '../models/Defunt';
import { DefuntService } from '../service/defunt.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-ajouter-defunt',
  templateUrl: './ajouter-defunt.component.html',
  styleUrls: ['./ajouter-defunt.component.css']
})
export class AjouterDefuntComponent implements OnInit {

  myForm: FormGroup;
  id: string ;

  constructor(private formBuilder: FormBuilder, private defuntService: DefuntService, private route: ActivatedRoute) {
    this.myForm = formBuilder.group(
      {
        'prenom': new FormControl(),
        'nom': new FormControl(),
        'epouxEpouse': new FormControl(),
        'dateDuDeces': new FormControl(),
        'lieuDuDeces': new FormControl(),
        'dateDeNaissance': new FormControl(),
        'lieuDeNaissance': new FormControl(),
        'dateDesFunerailles': new FormControl(),
        'lieuDeDepart': new FormControl(),
        'heureDeDepart': new FormControl(),
        'egliseDe': new FormControl(),
        'heureDeLaMesse': new FormControl(),
        'crematorium': new FormControl(),
        'heureCrematorium': new FormControl(),
        'cimetiere': new FormControl(),
        'heureCimetiere': new FormControl()
      }
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.defuntService.getHttpOne(this.id).subscribe((result: Defunt) => {
        this.myForm = this.formBuilder.group({
          'prenom': result.prenom ? result.prenom : new FormControl(),
          'nom': result.nom ? result.nom : new FormControl(),
          'epouxEpouse': result.epouxEpouse ? result.epouxEpouse : new FormControl(),
          'dateDuDeces': result.dateDuDeces ? new Date(result.dateDuDeces) : new FormControl(),
          'lieuDuDeces': result.lieuDuDeces ? result.lieuDuDeces : new FormControl(),
          'dateDeNaissance': result.dateDeNaissance ? new Date (result.dateDeNaissance) : new FormControl(),
          'lieuDeNaissance': result.lieuDeNaissance ? result.lieuDeNaissance : new FormControl(),
          'dateDesFunerailles': result.dateDesFunerailles ? new Date (result.dateDesFunerailles) : new FormControl(),
          'lieuDeDepart': result.lieuDeNaissance ? result.lieuDeDepart : new FormControl(),
          'heureDeDepart': result.heureDeDepart ? new Date (result.heureDeDepart) : new FormControl(),
          'egliseDe': result.egliseDe ? result.egliseDe : new FormControl(),
          'heureDeLaMesse': result.heureDeLaMesse ? new Date (result.heureDeLaMesse) : new FormControl(),
          'crematorium': result.crematorium ? result.crematorium : new FormControl(),
          'heureCrematorium': result.heureCrematorium ? new Date (result.heureCrematorium) : new FormControl(),
          'cimetiere': result.cimetiere ? result.cimetiere : new FormControl(),
          'heureCimetiere': result.heureDeDepart ? new Date (result.heureDeDepart) : new FormControl()

        });
      });
    }
  }

  onSubmit(defunt: Defunt) {
    defunt.heureDeDepart =  defunt.heureDeDepart ? moment(defunt.heureDeDepart, 'HH:mm').toDate() : null;
    defunt.heureDeLaMesse = defunt.heureDeLaMesse  ? moment(defunt.heureDeLaMesse, 'HH:mm').toDate() : null;
    defunt.heureCrematorium =  defunt.heureCrematorium ? moment(defunt.heureCrematorium, 'HH:mm').toDate() : null;
    defunt.heureCimetiere = defunt.heureCimetiere ? moment(defunt.heureCimetiere, 'HH:mm').toDate() : null ;
    if (this.id) {
      defunt._id = this.id;
      this.defuntService.postHttp(defunt).subscribe(
        (e) => {console.log(e); }
      );
    } else {
      this.defuntService.putHttp(defunt).subscribe(
        (e) => {console.log(e); }
      );
    }
    return false;
  }


}
