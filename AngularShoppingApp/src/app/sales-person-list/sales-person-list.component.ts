import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

        salesPersonList:SalesPerson[] =
        [
          new SalesPerson("Andrei", "Stafie", "andreistafie@gmail.com", 3000),
          new SalesPerson("Ghita", "Florin", "ghitaflorin@gmail.com", 5000),
          new SalesPerson("Liviu", "Chirita", "liviuchirita@gmail.com", 2000),
          new SalesPerson("Tanase", "Alexandru", "alexandrutanase@gmail.com", 7000)
        ]
}
