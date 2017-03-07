import { Component, Input, OnInit } 	from '@angular/core';
import { JobService }									from './job.service';
import { Job }												from './job';
import { Router, 
					ActivatedRoute, Params }		from '@angular/router';

@Component({
  templateUrl: 'jobs.component.html'
})
export class JobsComponent implements OnInit {
	jobs: Job[] = [];
	router: Router;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  	this.jobService.getJobs()
  		.then(jobs => this.jobs = jobs);
  }
  gotoDetail(job: Job): void {
  	let link = ['/jobs', job.id];
    this.router.navigate(link);
  }
}
