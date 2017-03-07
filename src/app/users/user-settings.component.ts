import { Component, Input, OnInit }   from '@angular/core';
import { User }				                from './user';
import { Router }                     from '@angular/router';

import { UserService }                from './user.service';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Http, Response }             from '@angular/http';
import { Headers, RequestOptions }    from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements OnInit {
  @Input()
  user: User;
  private emailUrl = 'api/email';
  private data = 'Testing'
  constructor(
  private userService: UserService,
  private route: ActivatedRoute,
  private location: Location,
  private http: Http
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.userService.getUser(+params['id']))
    .subscribe(user => this.user = user);
}
save(): void {
  this.userService.update(this.user)
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
