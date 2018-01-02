import { Component, OnInit } from '@angular/core';
import { Defunt } from '../models/Defunt';
import { DefuntSearch } from '../models/DefuntSearch';
import { DefuntService } from '../service/defunt.service';


@Component({
  selector: 'app-list-defunt',
  templateUrl: './list-defunt.component.html',
  styleUrls: ['./list-defunt.component.css']
})
export class ListDefuntComponent implements OnInit {

   defunts: Array<Defunt> = [];
   searchText: DefuntSearch;
   p = 1;

  constructor(private defuntService: DefuntService) {
     this.searchText = new DefuntSearch();
   }


  ngOnInit() {
    this.defuntService.getHttp('http://localhost:3000/Defunt').subscribe((results) => {
      this.defunts = results;
    });
  }

  deleteDefunt (id: string) {
    const defunt: Defunt = new Defunt(id) ;
    this.defuntService.deleteHttp('http://localhost:3000/Defunt', defunt).subscribe((results) => {
      this.defunts = this.defunts.filter((e) => e._id !== id);
      console.log(results);
    });
  }

}
