import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  http = inject(HttpClient);

  getCountryDetails(countryCode: string): Promise<object> {
    return new Promise(res => {
      this.http.get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`)
        .subscribe((data: any) => {
          const [details] = data[1]
          res(details)
        })
    })
  }
}
