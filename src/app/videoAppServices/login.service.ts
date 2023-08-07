import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from './network.service';
import { VcApiConstants } from '../utils/VcApiConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isNewUser: boolean = false;
  constructor(private networkservice: NetworkService,
    private vcApiConstants: VcApiConstants) { }

  public signup(params:any):Observable<any>{
    console.log(params);
    return this.networkservice.postRequest(params, this.vcApiConstants.ApiUrls.register)
  }
}
