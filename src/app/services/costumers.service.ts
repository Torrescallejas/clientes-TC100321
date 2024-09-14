import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/model/customer';
import { GenericService } from './generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class CostumersService extends GenericService<Customer> {

  private customerChange = new Subject<Customer[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/customers`
      );

   }

   //Getters y Setters

   setMessageChange(message: string){
    this.messageChange.next(message);
   }

   getMessageChange(){
    //para que alguien lo utilice
    return this.messageChange.asObservable();
  }

  setCustomerChange(list: Customer[]){
    this.customerChange.next(list);
   }

   getCustomerChange(){
    //para que alguien lo utilice
    return this.customerChange.asObservable();
  }

  /*saveTransactional(dto: CustomerListPhoneDocumentDTO){
    return this.http.post(this.url, dto)
  }*/

}
