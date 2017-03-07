import { Injectable } 								from '@angular/core';
import { Headers, Http, RequestOptions, Response } 	from '@angular/http';
import { Observable } 								from 'rxjs/Observable';
import { Client } 		  							from './client';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//TODO client search, include pagination

@Injectable()
export class ClientService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private clientsUrl = './api/clients';  // URL to web api

	constructor(private http: Http) { }

	getClients(): Promise<Client[]> {
		return this.http.get(this.clientsUrl)
			.toPromise()
			.then(response => response.json().data as Client[])
			.catch(this.handleError);
	}

	update(client: Client): Promise<Client> {
  	const url = `${this.clientsUrl}/${client.id}`;
  	return this.http
    	.put(url, JSON.stringify(client), {headers: this.headers})
    	.toPromise()
    	.then(() => client)
    	.catch(this.handleError);
	}

	create(client: Client): Promise<Client> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
		console.log(client);
  	return this.http.post(this.clientsUrl, { client }, options)
    	.toPromise()
    	.then(this.extractData)
    	.catch(this.handleError);
	}

	getClient(id: number): Promise<Client> {
  	const url = `${this.clientsUrl}/${id}`;
  	return this.http.get(url)
    	.toPromise()
    	.then(response => response.json().data as Client)
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
