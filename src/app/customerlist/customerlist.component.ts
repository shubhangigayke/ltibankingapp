import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CustserviceService } from '../services/custservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customers?: Observable<Customer[]>;
  currentcustomer?: Customer;
  currentIndex = -1;
  title = '';

  constructor( private customerService: CustserviceService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }

}
