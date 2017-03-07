import { Injectable } 								from '@angular/core';
import { Headers, Http, RequestOptions, Response } 	from '@angular/http';
import { Observable } 								from 'rxjs/Observable';
import { Job } 		  								from './job';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class JobService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private jobsUrl = './api/jobs';  // URL to web api

	constructor(private http: Http) { }

	getJobs(): Promise<Job[]> {
		return this.http.get(this.jobsUrl)
			.toPromise()
			.then(response => response.json().data as Job[])
			.catch(this.handleError);
	}

	update(job: Job): Promise<Job> {
  	const url = `${this.jobsUrl}/${job.id}`;
  	return this.http
    	.put(url, JSON.stringify(job), {headers: this.headers})
    	.toPromise()
    	.then(() => job)
    	.catch(this.handleError);
	}

	create(job: Job): Promise<Job> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
		console.log(job);
  	return this.http.post(this.jobsUrl, { job }, options)
    	.toPromise()
    	.then(this.extractData)
    	.catch(this.handleError);
	}

	getJob(id: number): Promise<Job> {
  	const url = `${this.jobsUrl}/${id}`;
  	return this.http.get(url)
    	.toPromise()
    	.then(response => response.json().data as Job)
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
