import { Component, Input, OnInit }   from '@angular/core';
import { Client }				              from './client';
import { Router }                     from '@angular/router';

import { ClientService }              from './client.service';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Http, Response }             from '@angular/http';
import { Headers, RequestOptions }    from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {
  @Input()
  client: Client;
  private emailUrl = 'api/email';
  private data = 'Testing'
  constructor(
  private clientService: ClientService,
  private route: ActivatedRoute,
  private location: Location,
  private http: Http
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.clientService.getClient(+params['id']))
    .subscribe(client => this.client = client);
}
save(): void {
  this.clientService.update(this.client)
    .then(() => this.goBack());
}
goBack(): void {
  this.location.back();
}



}
