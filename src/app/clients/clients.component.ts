import { Component, Input, OnInit } 	from '@angular/core';
import { ClientService }							from './client.service';
import { Client }											from './client';
import { Router, 
					ActivatedRoute, Params }		from '@angular/router';

@Component({
  templateUrl: 'clients.component.html'
})
export class ClientsComponent implements OnInit {
	clients: Client[] = [];
	router: Router;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  	this.clientService.getClients()
  		.then(clients => this.clients = clients);
  }
  gotoDetail(client: Client): void {
  	let link = ['/client', client.id];
    this.router.navigate(link);
  }
}
