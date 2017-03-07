import { Component, Input, OnInit }   from '@angular/core';
import { Hotel }				              from './hotel';
import { Router }                     from '@angular/router';

import { HotelService }               from './hotel.service';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Http, Response }             from '@angular/http';
import { Headers, RequestOptions }    from '@angular/http';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html'
})
export class HotelDetailComponent implements OnInit {
  @Input()
  hotel: Hotel;
  private emailUrl = 'api/email';
  private data = 'Testing'
  constructor(
  private hotelService: HotelService,
  private route: ActivatedRoute,
  private location: Location,
  private http: Http
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.hotelService.getHotel(+params['id']))
    .subscribe(hotel => this.hotel = hotel);
}
save(): void {
  this.hotelService.update(this.hotel)
    .then(() => this.goBack());
}
goBack(): void {
  this.location.back();
}



}
