import { NgModule } 				from '@angular/core';
import { HttpModule }           	from '@angular/http';
import { CommonModule } 			from '@angular/common';
import { InMemoryWebApiModule } 	from 'angular-in-memory-web-api';
import { InMemoryDataService }  	from './in-memory-data.service';
import { ClientsComponent } 		from './clients.component';
import { Client }					from './client';
import { ClientService }			from './client.service';
import { ClientRoutingModule }		from './client-routing.module';
import { ClientDetailComponent }	from './client-detail.component';

@NgModule({
  imports: [ ClientRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), CommonModule ],
  declarations: [ ClientsComponent, ClientDetailComponent ],
  providers: [ ClientService ]
})
export class ClientModule { }
