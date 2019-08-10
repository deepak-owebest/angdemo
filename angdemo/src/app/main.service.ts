import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

	constructor(private http: HttpClient) {
    

   }

	getPrimeList(data){
		const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json'
		  })
		};
		return this.http.post<any>('http://angdemo.stage02.obdemo.com:3033/prime', data, httpOptions);
	}
}
