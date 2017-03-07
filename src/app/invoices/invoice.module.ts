import { NgModule } 			from '@angular/core';
import { HttpModule }           from '@angular/http';
import { CommonModule } 		from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InvoicesComponent } 		from './invoices.component';
import { Invoice }					from './invoice';
import { InvoiceService }			from './invoice.service';
import { InvoicesRoutingModule }	from './invoice-routing.module';
import { InvoiceDetailComponent }	from './invoice-detail.component';

@NgModule({
  imports: [ InvoicesRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), CommonModule ],
  declarations: [ InvoicesComponent, InvoiceDetailComponent ],
  providers: [ InvoiceService ]
})
export class InvoiceModule { }