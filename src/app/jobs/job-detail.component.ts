import { Component, Input, OnInit } from '@angular/core';
import { Job }				              from './job';
import { Router }                   from '@angular/router';

import { JobService }               from './job.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Http, Response }           from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html'
})
export class JobDetailComponent implements OnInit {
  @Input()
  job: Job;
  private emailUrl = 'api/email';
  private data = 'Testing'
  constructor(
  private jobService: JobService,
  private route: ActivatedRoute,
  private location: Location,
  private http: Http
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.jobService.getJob(+params['id']))
    .subscribe(job => this.job = job);
}
save(): void {
  this.jobService.update(this.job)
    .then(() => this.goBack());
}
goBack(): void {
  this.location.back();
}
// sendEmail(data: string): Observable<Response> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//       return this.http.post(this.emailUrl, {}, options)
//         .catch();
// }


}
