import { NgModule } 							from '@angular/core';
import { HttpModule }           	from '@angular/http';
import { CommonModule } 					from '@angular/common';
import { InMemoryWebApiModule } 	from 'angular-in-memory-web-api';
import { InMemoryDataService }  	from './in-memory-data.service';
import { HotelsComponent } 				from './hotels.component';
import { Hotel }									from './hotel';
import { HotelService }						from './hotel.service';
import { HotelRoutingModule }			from './hotel-routing.module';
import { HotelDetailComponent }		from './hotel-detail.component';

@NgModule({
  imports: [ HotelRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), CommonModule ],
  declarations: [ HotelsComponent, HotelDetailComponent ],
  providers: [ HotelService ]
})
export class HotelModule { }
