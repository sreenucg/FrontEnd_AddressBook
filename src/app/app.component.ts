import { Component } from '@angular/core';
import { AddressBook, HttpClientService } from './service/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book-search-filter-example';

  searchedKeyword: string;
  addresses: AddressBook[];
  

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit(): void {
    this.httpClientService.getAddresses().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
      this.addresses = response;
  }
  

  
}
