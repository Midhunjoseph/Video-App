import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isNewUser: boolean = false;
  constructor() { }
}
