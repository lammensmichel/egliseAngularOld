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

  constructor(private formBuilder: FormBuilder, private defuntService: DefuntService, private route: ActivatedRoute) {
    this.myForm = formBuilder.group(
      {
        'prenom': new FormControl(),
        'nom': new FormControl(),
        'epouxEpouse': new FormControl(),
        'dateDuDeces': new FormControl(),
        'lieuDuDeces': new FormControl(),
        'dateDeNaissance': new FormControl(),
        'LieuDeNaissance': new FormControl(),
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.defuntService.getHttpOne(`http://localhost:3000/Defunt/${id}`).subscribe((result: Defunt) => {
        this.myForm = this.formBuilder.group(result);
      });
    }
  }

  onSubmit(defunt: Defunt) {
    defunt.heureDeDepart =  defunt.heureDeDepart ? moment(defunt.heureDeDepart, 'HH:mm').toDate() : null;
    defunt.heureDeLaMesse = defunt.heureDeLaMesse  ? moment(defunt.heureDeLaMesse, 'HH:mm').toDate() : null;
    defunt.heureCrematorium =  defunt.heureCrematorium ? moment(defunt.heureCrematorium, 'HH:mm').toDate() : null;
    defunt.heureCimetiere = defunt.heureCimetiere ? moment(defunt.heureCimetiere, 'HH:mm').toDate() : null ;
    this.defuntService.putHttp('http://localhost:3000/Defunt', defunt).subscribe(
      (e) => {console.log(e); }
    );
    return false;
  }


}
