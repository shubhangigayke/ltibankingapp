import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustserviceService } from '../services/custservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customer: Customer = new Customer();
  types:Array<string>=new Array<string>();
  submitted = false;
  formdata: FormGroup = new FormGroup({});

  constructor(private custservice: CustserviceService,
    private router: Router) { }

  ngOnInit() {
    this.types=['Saving', 'Salary', 'Current'];
    this.formdata = new FormGroup({
      age: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
         Validators.maxLength(2)
      ]))
   });

  }

  newEmployee(): void {
    this.submitted = false;
    this.customer = new Customer();
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
