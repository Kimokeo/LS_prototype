import { Component, Input, OnInit } 	from '@angular/core';
import { HotelService }							  from './hotel.service';
import { Hotel }											from './hotel';
import { Router, 
					ActivatedRoute, Params }		from '@angular/router';

@Component({
  templateUrl: 'hotels.component.html'
})
export class HotelsComponent implements OnInit {
	hotels: Hotel[] = [];
	router: Router;
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  	this.hotelService.getHotels()
  		.then(hotels => this.hotels = hotels);
  }
  gotoDetail(hotel: Hotel): void {
  	let link = ['/hotel', hotel.id];
    this.router.navigate(link);
  }
}
