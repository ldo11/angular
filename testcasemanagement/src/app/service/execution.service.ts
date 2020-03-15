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
    const body = {};
    return this.httpService.sendGetRequest(url,body);
  }

  getExecutionId(id){
    const url = 'execution/:id';
    const body = {};
    return this.httpService.sendGetRequest(url,body);
  }

  getExecutionTestcase(testcase){
    const url = 'execution/:testcase';
    const body = {};
    return this.httpService.sendGetRequest(url,body);
  }

  
}
