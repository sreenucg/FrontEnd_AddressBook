import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class AddressBook {
  constructor(
    public  id: string,
    public  firstName: string,
    public  lastName: string,
    public  street: string,
    public  city: string,
    public  state: string,
    public  fipsCode: string,
  ) {
  }
}

// This is a service class
@Injectable({
  providedIn: 'root'
})

export class HttpClientService{

  constructor(
    private httpClient: HttpClient
  ) { }

  getAddresses(){
      console.log('Test Call');
      return this.httpClient.get<AddressBook[]>('http://localhost:8087/addresses');
  }
}