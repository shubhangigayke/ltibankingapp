import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustserviceService } from '../services/custservice.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  customer: Customer = new Customer();  

  constructor(private custservice: CustserviceService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() { 
    this.customer.id = this.route.snapshot.params['id'];
    
    this.custservice.getCustomer(this.customer.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }

}
