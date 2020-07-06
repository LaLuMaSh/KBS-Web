import { Component, OnInit } from '@angular/core';
import { CustomerDto, ScreeningDto } from '../../model/Model';
import { CustomerService } from '../../services/customer.service';
import { ScreeningService } from '../../services/screening.service';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  customerValue: CustomerDto;
  customers: CustomerDto[];
  screenings: ScreeningDto[];


  constructor(
    private customerService: CustomerService,
    private screeningsService: ScreeningService
  ) {
  }

  set customer(customer: CustomerDto) {
    this.customerValue = customer;
    this.screeningsService.getScreeningForCustomer(customer.uuid).subscribe(value => {
      this.screenings = value;
    });
  }

  get customer() {
    return this.customerValue;
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(value => {
      this.customers = value;
    });
  }

}
