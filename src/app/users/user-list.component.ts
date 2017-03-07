import { Component, Input, OnInit } 	from '@angular/core';
import { UserService }									from './user.service';
import { User }												from './user';
import { Router, 
					ActivatedRoute, Params }		from '@angular/router';

@Component({
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
	users: User[] = [];
	router: Router;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  	this.userService.getUsers()
  		.then(users => this.users = users);
  }
  gotoDetail(user: User): void {
  	let link = ['/users', user.id];
    this.router.navigate(link);
  }
}
