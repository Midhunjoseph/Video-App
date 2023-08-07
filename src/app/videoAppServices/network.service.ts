import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environmentts/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  public postRequest(params: any, url: any){
    console.log("post",params)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.urls.baseUrl + url, params,httpOptions)
  }

  // private setRequestHeader() {
  //   let userInfo = localStorage.getItem(this.fbConstants.localStorageItems.userInfo);
  //   if (userInfo !== null) {
  //     let userInfoParsed: CurrentUser = JSON.parse(userInfo);
  //     if (userInfoParsed != null && userInfoParsed.data.json_token != null) {
  //       this.httpHeader = new HttpHeaders().set(this.fbConstants.auth_params.authorization,
  //         this.fbConstants.auth_params.token_prefix +
  //         userInfoParsed.data.json_token.access);
  //       return;
  //     }
  //   }
  //   this.httpHeader = '';
  // }
}
