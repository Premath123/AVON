import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  CheckOut: any;
  constructor(private avonService: AvonService) { }

  ngOnInit() {
    this.avonService.getBuyer().subscribe(
      res => {
        this.CheckOut = res;
        console.log('Loyalty ' + JSON.stringify(this.CheckOut));
      },
      err => console.error(err)
    );

  }
}