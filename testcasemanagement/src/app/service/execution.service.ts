import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExecutionService {

  constructor(private logger: LogService,private httpService: HttpService) { }

  getAllEx(){
    const url = 'execution/allex';
    return this.httpService.sendGetRequest(url,{});
  }


}
