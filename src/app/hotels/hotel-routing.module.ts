import { NgModule }                 from '@angular/core';
import { Routes,
     RouterModule }                 from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { HotelsComponent }         from './hotels.component';
import { HotelDetailComponent }    from './hotel-detail.component';
const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
    data: {
      title: 'Hotels'
    }
  },
  {
    path: ':id', 
    component: HotelDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {}
