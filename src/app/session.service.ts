import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private userSession = {
    name: '',
    phone: '',
    isProvider: ''
  }

  constructor() { }

  public setSession(data){
    this.userSession = data;
  }

  public getSession(){
    return this.userSession;
  }

}
