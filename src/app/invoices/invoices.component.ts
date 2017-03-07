import { Component, Input, OnInit } 	from '@angular/core';
import { InvoiceService }									from './invoice.service';
import { Invoice }												from './invoice';
import { Router, 
					ActivatedRoute, Params }		from '@angular/router';

@Component({
  templateUrl: 'invoices.component.html'
})
export class InvoicesComponent implements OnInit {
	invoices: Invoice[] = [];
	router: Router;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  	this.invoiceService.getInvoices()
  		.then(invoices => this.invoices = invoices);
  }
  gotoDetail(invoice: Invoice): void {
  	let link = ['/invoices', invoice.id];
    this.router.navigate(link);
  }
}
