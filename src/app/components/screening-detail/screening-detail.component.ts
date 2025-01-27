import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplexScreeningDto, CustomerDto, LocationDto, PlaceDto, ReservationDto, RowDto } from '../../model/Model';
import { ScreeningService } from '../../services/screening.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-screening-detail',
  templateUrl: './screening-detail.component.html',
  styleUrls: ['./screening-detail.component.css']
})
export class ScreeningDetailComponent implements OnInit {
  public screening: ComplexScreeningDto;
  customClases = [] as string[][];
  reservedPlaces = [] as LocationDto[];
  customer: CustomerDto;
  customers: CustomerDto[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private screeningService: ScreeningService,
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.screeningService.getScreening(this.route.snapshot.paramMap.get('uuid')).subscribe(value => {
      this.customClases = [];
      for (const row of value.hall.rows) {
        this.customClases[row.id] = [];
        for (const place of row.places) {
          this.customClases[row.id][place.number] = 'not-selected';
        }
      }
      this.screening = value;
    });

    this.customerService.getCustomers().subscribe(value => {
      this.customers = value;
    });
  }

  public getColor(isReserved: boolean): string {
    if (isReserved === true) {
      return 'place-used';
    } else {
      return 'place-free';
    }
  }

  reserve(place: PlaceDto, row: RowDto) {
    if (place.reserved) {
      return;
    }
    if (this.customClases[row.id][place.number] === 'selected') {
      this.customClases[row.id][place.number] = 'not-selected';
      for (const reservedPlace of this.reservedPlaces) {
        if (!reservedPlace) {
          continue;
        }

        if (reservedPlace.place == place.number && reservedPlace.row == row.id) {
          const index = this.reservedPlaces.indexOf(reservedPlace, 0);
          if (index > -1) {
            delete this.reservedPlaces[index];
            break;
          }
        }
      }
    } else {
      this.customClases[row.id][place.number] = 'selected';
      const simplePlace = new LocationDto();
      simplePlace.place = place.number;
      simplePlace.row = row.id;
      this.reservedPlaces.push(simplePlace);
    }
  }

  apply() {
    const reservation = new ReservationDto();
    reservation.customerUuid = this.customer.uuid;
    reservation.screeningUuid = this.screening.uuid;
    reservation.places = this.reservedPlaces;
    this.screeningService.reservatePlace(reservation).subscribe(value => {
      if ( value == null || value === '') {
        this.router.navigateByUrl('/home');
        console.log(value);
      } else {
        console.log(value);
      }
    });
  }

  isDisabled(): boolean {
    if (!this.customer) {
      return true;
    }

    for (const place of this.reservedPlaces) {
      if (place) {
        return false;
      }
    }
    return true;
  }
}

