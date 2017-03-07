import { NgModule } 							from '@angular/core';
import { HttpModule }           	from '@angular/http';
import { CommonModule } 					from '@angular/common';
import { InMemoryWebApiModule } 	from 'angular-in-memory-web-api';
import { InMemoryDataService }  	from './in-memory-data.service';
import { UserListComponent } 			from './user-list.component';
import { User }										from './user';
import { UserService }						from './user.service';
import { UserRoutingModule }			from './user-routing.module';
import { UserSettingsComponent }	from './user-settings.component';

@NgModule({
  imports: [ UserRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), CommonModule ],
  declarations: [ UserListComponent, UserSettingsComponent ],
  providers: [ UserService ]
})
export class UserModule { }