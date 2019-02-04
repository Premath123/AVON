import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvonService } from '../../app/services/avon.service'
@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {
  data: any;
  istokenTransfer: Boolean;
  dataa: any;
  constructor(private http: HttpClient,private avonService: AvonService) { }

  ngOnInit() {
    console.log("ng on init called");
    this.avonService.getRep("REP1").subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
    this.avonService.getRepo().subscribe(res => {
      this.dataa = res;
      console.log(this.dataa);
    })
  }
 /* AddButton(item: any) {
    this.tokenTransfer(item)
  }
  Add(item: any, billData: any) {
    console.log("button clicked");
    let data = {};

    data["$class"] = item.$class
    data["rep"] = billData.bill
    data["buyer"] = item.itemID
    data["points"] = 2
    data["transactionId"]
    return this.avonService.add(data).subscribe(data => {
      console.log("add bill was successfully")
    },
      err => {
        console.log("error")
      });

}*/


}