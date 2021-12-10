import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustserviceService } from './services/custservice.service';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    ViewcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
