import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RootObject } from '../customer/customer.interface';
const API_URL = "http://ec2-52-2-140-159.compute-1.amazonaws.com:3000/api/";
@Injectable({
  providedIn: 'root'
})
export class AvonService {

  constructor(private http: HttpClient) { }
  getBuyer() {
    return this.http.get(API_URL +"Item/");
  }

  add(data: any){
    return this.http.post(API_URL +"AddToCart", data);
  }

  generateBill(data: any) {
    return this.http.post(API_URL + "GenerateBill", data);
  }
  getRep(id: String) {
    return this.http.get(API_URL + "Rep/" + id);
  }
  getRepo() {
    return this.http.get(API_URL + "Buyer/");
  }
  tokenTransfer() {
    return this.http.get(API_URL + "TokenTransfer/");
  }
  getPartnerSalesLedger() {
    return this.http.get(API_URL + "PartnerSalesLedger/");
  }
}
