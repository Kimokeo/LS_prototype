import { NgModule }                 from '@angular/core';
import { Routes,
     RouterModule }                 from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { ClientsComponent }         from './clients.component';
import { ClientDetailComponent }    from './client-detail.component';
const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: {
      title: 'Clients'
    }
  },
  {
    path: ':id', 
    component: ClientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
