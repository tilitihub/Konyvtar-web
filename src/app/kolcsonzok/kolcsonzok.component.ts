import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
 selector: 'app-kolcsonzok',
 standalone: true,
  imports: [],
 templateUrl: './kolcsonzok.component.html',
 styleUrls: ['./kolcsonzok.component.css']
})
export class KolcsonzokComponent implements OnInit {

 constructor(private baseService: BaseService) { }

 ngOnInit(): void {
    // Itt hívjuk meg a szükséges adatok lekérdezését
 }

}
