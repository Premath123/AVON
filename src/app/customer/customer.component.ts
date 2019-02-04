import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../../app/customer/customer.interface'

import { AvonService } from '../../app/services/avon.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  data: any;
  isBillGenerated: Boolean;
  billNo: String;

  constructor(private http: HttpClient, private avonService: AvonService) { }

  ngOnInit() {
    this.isBillGenerated = false;
    console.log("ng on init called");
    this.avonService.getBuyer().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
    
  }

  AddButton(item: any){
    this.generateBill(item)
  }
  Add(item: any, billData: any) {
    console.log("button clicked");
    let data = {};

data["$class"] = item.$class
data["bill"] = billData.bill
data["item"] = item.itemID
data["qty"] = 2
    return this.avonService.add(data).subscribe(data => {
      console.log("add bill was successfully")
    },
    err => {
      console.log("error")
    });
  }

  generateBill(item: any){
    let data = {}
    data["$class"] = "org.avon.loyalty.GenerateBill"
    data["billNo"] = "B1"
    data["buyer"] = "resource:org.avon.loyalty.Buyer#GRR"
    data["rep"] = "resource:org.avon.loyalty.Rep#REP1"

    return this.avonService.generateBill(data).subscribe(res => {
      console.log("bill generated successfully");
      this.isBillGenerated = true
      // this.Add(item, res)
    },
    error => {
      console.log("error generating bill "+JSON.stringify(error));
    })

  }

}
