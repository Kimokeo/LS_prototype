import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobDetailComponent }  from './job-detail.component';
const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    data: {
      title: 'Jobs'
    }
  },
  {
    path: ':id', 
    component: JobDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule {}
