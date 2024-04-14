import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
 selector: 'app-home',
 standalone: true,
 imports: [],
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor(private baseService: BaseService) { }

 ngOnInit(): void {
    // Itt hívjuk meg a szükséges adatok lekérdezését
 }

}
