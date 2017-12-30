import { Pipe, PipeTransform } from '@angular/core';
import { DefuntSearch } from '../models/DefuntSearch';
import { Defunt } from '../models/Defunt';
import * as moment from 'moment';
@Pipe({
  name: 'filterDefunt'
})
export class FilterDefuntPipe implements PipeTransform {
  transform(items: Array<Defunt>, searchText: DefuntSearch):  Array<Defunt> {
      items = searchText.nom ? items.filter(t => t.nom.toLocaleLowerCase().includes(searchText.nom.toLocaleLowerCase())) : items;
      items = searchText.prenom ? items.filter(t => t.prenom.toLocaleLowerCase().includes(searchText.prenom.toLocaleLowerCase())) : items;
      items = searchText.dateDuDeces ?
        items.filter(t => moment (t.dateDuDeces).format('YYYY-MM-DD') === moment (searchText.dateDuDeces).format('YYYY-MM-DD')) : items;

      items = searchText.dateDesFunerailles ?
       // tslint:disable-next-line:max-line-length
       items.filter(t => moment (t.dateDesFunerailles).format('YYYY-MM-DD') === moment (searchText.dateDesFunerailles).format('YYYY-MM-DD') ) : items;
      return items;
   }
}
