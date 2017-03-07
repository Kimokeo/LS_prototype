import { NgModule } 			from '@angular/core';
import { HttpModule }           from '@angular/http';
import { CommonModule } 		from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { JobsComponent } 		from './jobs.component';
import { Job }					from './job';
import { JobService }			from './job.service';
import { JobsRoutingModule }	from './jobs-routing.module';
import { JobDetailComponent }	from './job-detail.component';

@NgModule({
  imports: [ JobsRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), CommonModule ],
  declarations: [ JobsComponent, JobDetailComponent ],
  providers: [ JobService ]
})
export class JobsModule { }
