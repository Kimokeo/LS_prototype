import { Component, Input, OnInit } from '@angular/core';
import { Invoice }				            from './invoice';
import { Router }                     from '@angular/router';

import { InvoiceService }             from './invoice.service';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Http, Response }             from '@angular/http';
import { Headers, RequestOptions }    from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'invoice-detail',
  templateUrl: './invoice-detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {
  @Input()
  invoice: Invoice;
  private emailUrl = 'api/email';
  private data = 'Testing'
  constructor(
  private invoiceService: InvoiceService,
  private route: ActivatedRoute,
  private location: Location,
  private http: Http
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.invoiceService.getInvoice(+params['id']))
    .subscribe(invoice => this.invoice = invoice);
}
save(): void {
  this.invoiceService.update(this.invoice)
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
