import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const api = 'https://orangevalleycaa.org/api/videos';

export class ActivityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getActivity(id: string) {
    return this.httpClient.get(api + '/id/' + id);
  }

  getAllAcivities() {
    return this.httpClient.get(api);
  }
}
