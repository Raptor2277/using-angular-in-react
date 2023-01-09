import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() : Observable<object> {
    var obs = this.http.get('/assets/config.json');
    obs.subscribe(e => this.appConfig = e);
    return obs;
  }

  // This is an example property ... you can make it however you want.
  get base_url() : string {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.base_url;
  }

  testFunction(){
    console.log("test function")
    return "test";
  }
}