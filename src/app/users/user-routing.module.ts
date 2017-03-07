import { NgModule }                  from '@angular/core';
import { Routes,
     RouterModule }                  from '@angular/router';
import { ActivatedRoute, Params }    from '@angular/router';
import { UserSettingsComponent }     from './user-settings.component';
import { UserListComponent }         from './user-list.component';
const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: ':id', 
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
