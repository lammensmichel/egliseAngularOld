import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Defunt } from '../models/Defunt';

@Component({
  selector: 'app-ajouter-defunt',
  templateUrl: './ajouter-defunt.component.html',
  styleUrls: ['./ajouter-defunt.component.css']
})
export class AjouterDefuntComponent implements OnInit {

  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
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
  }

  onSubmit(value: Defunt) {
    console.log(value);
    return false;
  }


}
