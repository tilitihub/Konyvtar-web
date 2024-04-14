import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class BaseService {

 private apiUrl = 'http://localhost:3000/api';

 constructor(private http: HttpClient) { }

 getKolcsonzok(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Kolcsonzok`);
 }

 getKolcsonzesek(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Kolcsonzesek`);
 }

 // További CRUD műveletek...
}
