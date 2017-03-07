import { Injectable } 								from '@angular/core';
import { Headers, Http, RequestOptions, Response } 	from '@angular/http';
import { Observable } 								from 'rxjs/Observable';
import { Invoice } 		  							from './invoice';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class InvoiceService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private invoicesUrl = './api/invoices';  // URL to web api

	constructor(private http: Http) { }

	getInvoices(): Promise<Invoice[]> {
		return this.http.get(this.invoicesUrl)
			.toPromise()
			.then(response => response.json().data as Invoice[])
			.catch(this.handleError);
	}

	update(invoice: Invoice): Promise<Invoice> {
  	const url = `${this.invoicesUrl}/${invoice.id}`;
  	return this.http
    	.put(url, JSON.stringify(invoice), {headers: this.headers})
    	.toPromise()
    	.then(() => invoice)
    	.catch(this.handleError);
	}

	create(invoice: Invoice): Promise<Invoice> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
		console.log(invoice);
  	return this.http.post(this.invoicesUrl, { invoice }, options)
    	.toPromise()
    	.then(this.extractData)
    	.catch(this.handleError);
	}

	getInvoice(id: number): Promise<Invoice> {
  	const url = `${this.invoicesUrl}/${id}`;
  	return this.http.get(url)
    	.toPromise()
    	.then(response => response.json().data as Invoice)
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
