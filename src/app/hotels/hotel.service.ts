import { Injectable } 								from '@angular/core';
import { Headers, Http, RequestOptions, Response } 	from '@angular/http';
import { Observable } 								from 'rxjs/Observable';
import { Hotel } 		  							from './hotel';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//TODO hotel search, include pagination

@Injectable()
export class HotelService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private hotelsUrl = './api/hotels';  // URL to web api

	constructor(private http: Http) { }

	getHotels(): Promise<Hotel[]> {
		return this.http.get(this.hotelsUrl)
			.toPromise()
			.then(response => response.json().data as Hotel[])
			.catch(this.handleError);
	}

	update(hotel: Hotel): Promise<Hotel> {
  	const url = `${this.hotelsUrl}/${hotel.id}`;
  	return this.http
    	.put(url, JSON.stringify(hotel), {headers: this.headers})
    	.toPromise()
    	.then(() => hotel)
    	.catch(this.handleError);
	}

	create(hotel: Hotel): Promise<Hotel> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
		console.log(hotel);
  	return this.http.post(this.hotelsUrl, { hotel }, options)
    	.toPromise()
    	.then(this.extractData)
    	.catch(this.handleError);
	}

	getHotel(id: number): Promise<Hotel> {
  	const url = `${this.hotelsUrl}/${id}`;
  	return this.http.get(url)
    	.toPromise()
    	.then(response => response.json().data as Hotel)
    	.catch(this.handleError);
	}

	private extractData(res: Response) {
	  let body = res.json();
	  return body.data || { };
	}
	private handleError (error: Response | any) {
	  // In a real world app, we might use a remote logging infrastructure
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Promise.reject(errMsg);
	}
}
