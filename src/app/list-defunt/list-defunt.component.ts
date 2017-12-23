import { Component, OnInit } from '@angular/core';
import { Defunt } from '../models/Defunt';
import { DefuntSearch } from '../models/DefuntSearch';

@Component({
  selector: 'app-list-defunt',
  templateUrl: './list-defunt.component.html',
  styleUrls: ['./list-defunt.component.css']
})
export class ListDefuntComponent implements OnInit {

   defunts: Array<Defunt> = [];
   searchText: DefuntSearch;

  constructor() {
     this.searchText = new DefuntSearch();
     const defunt = new Defunt(1,
      'nom',
      'prenom',
      'epoux',
      '2017-12-22',
      'lieu du deces',
      'datedenaissance',
      'lieudenaissance',
      'datesDesFunerailles',
      'lieudedepart',
      'heurededepart',
      'eglise',
      'heuremess',
      'cremation',
      'heurecremation',
      'cimetiere',
      'heurecimetirer');
      this.defunts.push(defunt);
      this.defunts.push({ ...defunt, nom: 'nom2', id: 2 } );
      this.defunts.push({ ...defunt, nom: 'nom3', id: 3 } );
      this.defunts.push({ ...defunt, nom: 'nom4', id: 4 } );
      this.defunts.push({ ...defunt, nom: 'nom5', id: 5 } );
      this.defunts.push({ ...defunt, nom: 'nom6', id: 6 } );
      this.defunts.push({ ...defunt, nom: 'nom7', id: 7 } );
      this.defunts.push({ ...defunt, nom: 'nom8', id: 8 } );
      this.defunts.push({ ...defunt, nom: 'nom9', id: 9 } );
      this.defunts.push({ ...defunt, nom: 'nom10', id: 10 } );
      this.defunts.push({ ...defunt, nom: 'nom11', id: 11 } );
      this.defunts.push({ ...defunt, nom: 'nom12', id: 12 } );
      this.defunts.push({ ...defunt, nom: 'nom13', id: 13 } );
      this.defunts.push({ ...defunt, nom: 'nom14', id: 14 } );
      this.defunts.push({ ...defunt, nom: 'nom15', id: 15 } );

   }

  ngOnInit() {
  }

  deleteDefunt (id: number) {
    console.log('delete', id);
  }

  editDefunt (id: number) {
    console.log('edit', id);
  }

}
