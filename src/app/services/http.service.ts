import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecuritiesModel } from '@models/securities.model';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
import { TYPES } from '@constants/config.constant';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  /**
   * This method is used to fetch securities with the given request
   */
  public fetchSecurities(start: number, limit: number,
    sort: string, order: string): Observable<Array<SecuritiesModel>> {
    let requestUrl = `${environment.API_ENDPOINT}?_start=${start}&_limit=${limit}`;
    if (sort && order) {
      requestUrl += `&_sort=${TYPES[sort]}&_order=${order.toUpperCase()}`;
    }
    return this.httpClient.get<Array<SecuritiesModel>>(requestUrl);
  }
}
