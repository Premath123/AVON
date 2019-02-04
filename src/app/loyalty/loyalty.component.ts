import { Component, OnInit } from '@angular/core';
import { AvonService } from "../services/avon.service";

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  Loyalty: any;
  constructor(private avonService: AvonService) { }

  ngOnInit() {
    this.avonService.getBuyer().subscribe(
      res => {
        this.Loyalty = res;
        console.log('Loyalty ' + JSON.stringify(this.Loyalty));
      },
      err => console.error(err)
    );

  }
}