import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AjaxCallsService {

  private readonly apiUrl = 'http://rallycoding.herokuapp.com/api/music_albums';

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<HttpResponse<Object>> {
    //return this.httpClient.get(this.apiUrl);
    return this.httpClient.get(this.apiUrl, {observe: 'response'});
  }

  addFormData(data) {
    const endPoint = `${environment.firebase.databaseURL}/data.json`;
    return this.httpClient.post(endPoint,data);
  }

}
