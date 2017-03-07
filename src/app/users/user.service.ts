import { Injectable } 								from '@angular/core';
import { Headers, Http, RequestOptions, Response } 	from '@angular/http';
import { Observable } 								from 'rxjs/Observable';
import { User } 		  							from './user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private usersUrl = './api/users';  // URL to web api

	constructor(private http: Http) { }

	getUsers(): Promise<User[]> {
		return this.http.get(this.usersUrl)
			.toPromise()
			.then(response => response.json().data as User[])
			.catch(this.handleError);
	}

	update(user: User): Promise<User> {
  	const url = `${this.usersUrl}/${user.id}`;
  	return this.http
    	.put(url, JSON.stringify(user), {headers: this.headers})
    	.toPromise()
    	.then(() => user)
    	.catch(this.handleError);
	}

	create(user: User): Promise<User> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
		console.log(user);
  	return this.http.post(this.usersUrl, { user }, options)
    	.toPromise()
    	.then(this.extractData)
    	.catch(this.handleError);
	}

	getUser(id: number): Promise<User> {
  	const url = `${this.usersUrl}/${id}`;
  	return this.http.get(url)
    	.toPromise()
    	.then(response => response.json().data as User)
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
