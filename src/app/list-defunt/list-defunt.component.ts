import { Component, OnInit } from '@angular/core';
import { Defunt } from '../models/Defunt';
import { DefuntSearch } from '../models/DefuntSearch';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-list-defunt',
  templateUrl: './list-defunt.component.html',
  styleUrls: ['./list-defunt.component.css']
})
export class ListDefuntComponent implements OnInit {

   defunts: Array<Defunt> = [];
   searchText: DefuntSearch;

  constructor(private httpService: HttpService) {
     this.searchText = new DefuntSearch();
   }

  ngOnInit() {
    this.httpService.getHttp('http://localhost:3000/Defunt').subscribe((results) => {
      this.defunts = results;
    });
  }

  deleteDefunt (id: string) {
    const defunt: Defunt = new Defunt(id) ;
    this.httpService.deleteHttp('http://localhost:3000/Defunt', defunt).subscribe((results) => {
      this.defunts = this.defunts.filter((e) => e._id !== id);
      console.log(results);
    });
  }

  editDefunt (id: string) {
    console.log('edit', id);
  }

}
