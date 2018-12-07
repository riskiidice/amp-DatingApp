import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  baseUrl = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) { }

  listAllValues() {
    return this.http.get(this.baseUrl).pipe(
          map((response: any) => {
              return response;
          })
        );
    }
}
