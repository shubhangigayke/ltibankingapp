import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustserviceService } from '../services/custservice.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  customer: Customer = new Customer();
  types:Array<string>=new Array<string>();
  submitted = false;

  constructor(private custservice: CustserviceService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.types=['Saving', 'Salary', 'Current'];
    this.customer.id = this.route.snapshot.params['id'];
    
    this.custservice.getCustomer(this.customer.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  save() {
    this.custservice
    .createCustomer(this.customer).subscribe(data => {
      console.log(data)
      this.customer = new Customer();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }

}
