import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
 selector: 'app-kolcsonzesek',
 standalone: true,
  imports: [],
 templateUrl: './kolcsonzesek.component.html',
 styleUrls: ['./kolcsonzesek.component.css']
})
export class KolcsonzesekComponent implements OnInit {

 constructor(private baseService: BaseService) { }

 ngOnInit(): void {
    // Itt hívjuk meg a szükséges adatok lekérdezését
 }

}
