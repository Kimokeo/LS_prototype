import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { InvoiceDetailComponent }  from './invoice-detail.component';
const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    data: {
      title: 'Invoices'
    }
  },
  {
    path: ':id', 
    component: InvoiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}
