import { ErrorService } from '../../services/error.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, throwError, retry, Observable } from 'rxjs';


export interface Brewery {
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  website_url: string;
  }

@Component({
  selector: 'app-brewery-page',
  templateUrl: './brewery-page.component.html',
  styleUrls: ['./brewery-page.component.css']
})

export class BreweryPageComponent implements OnInit {
  title = 'Breweries NYC';
  breweries: Brewery[] = [];
  selectedBrewery?: Brewery;
  loading = false;
  term = ''

  constructor(
    public http: HttpClient,
    private errorService: ErrorService
    ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.http.get<Brewery[]>('https://api.openbrewerydb.org/v1/breweries?by_state=new_york&per_page=20')
    .pipe (
      delay(400),
      retry(2),
      catchError(this.errorHandler.bind(this))
          )
    .subscribe (
    data => {
    this.breweries = data
    this.loading = false

      }

      );

}

private errorHandler(error: HttpErrorResponse) {
  this.errorService.handle(error.message)
  return throwError(() => error.message)
}

  onSelect(brewery: Brewery): void {
  this.selectedBrewery = brewery;

}
}
