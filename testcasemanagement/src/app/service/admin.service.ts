import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private logger: LogService,
              private httpService: HttpService) {

  }
  getalluser(){
    console.log("call service")
    const url = 'admin/alluser';
    return this.httpService.sendGetRequest(url,{});
  }
  activateuser(email){
    const url = 'admin/activate';
    const body = {email: email};
    return this.httpService.sendGetRequest(url,body);
  }
  deactivateuser(email){
    const url = 'admin/deactivate';
    const body = {email: email};
    return this.httpService.sendGetRequest(url,body);
  }
  changerole(email,role){
    const url = 'admin/deactivate';
    const body = {email: email,role:role};
    return this.httpService.sendGetRequest(url,body);
  }
}
