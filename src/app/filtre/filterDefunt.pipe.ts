import { Pipe, PipeTransform } from '@angular/core';
import { DefuntSearch } from '../models/DefuntSearch';
import { Defunt } from '../models/Defunt';
@Pipe({
  name: 'filterDefunt'
})
export class FilterDefuntPipe implements PipeTransform {
  transform(items: Array<Defunt>, searchText: DefuntSearch):  Array<Defunt> {
    console.log(searchText);
      items = searchText.nom ? items.filter(t => t.nom.toLocaleLowerCase().includes(searchText.nom.toLocaleLowerCase())) : items;
      items = searchText.prenom ? items.filter(t => t.prenom.toLocaleLowerCase().includes(searchText.prenom.toLocaleLowerCase())) : items;
      items = searchText.dateDuDeces ?
        items.filter(t => t.dateDuDeces.toLocaleLowerCase().includes(searchText.dateDuDeces.toLocaleLowerCase())) : items;
      items = searchText.dateDesFunerailles ?
        items.filter(t => t.dateDesFunerailles.toLocaleLowerCase().includes(searchText.dateDesFunerailles.toLocaleLowerCase())) : items;
      return items;
   }
}
