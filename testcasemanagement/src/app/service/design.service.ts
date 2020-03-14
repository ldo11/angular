import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private logger: LogService,
    private httpService: HttpService) {

}


findprojectbyname(projectname){
  const url = 'design/p';
  const body = {};
  return this.httpService.sendGetRequest(url,body);
}


findtestcasebyname(tcname){
  const url = 'design/n';
  const body = {};
  return this.httpService.sendGetRequest(url,body);
}


addtestcase(testcasedetail){
  const url = 'design';
  const body = {testcasedetail:testcasedetail};
  return this.httpService.sendPostRequest(url,body);
}


updatetestcase(tcname){
  const url = 'design/update';
  const body = {tcname: tcname};
  return this.httpService.sendPostRequest(url,body);
}

addteststep(teststepname){
  const url = 'design/addstep';
  const body = {teststepname: teststepname};
  return this.httpService.sendPostRequest(url,body);
}


updateteststep(teststepid){
  const url = 'design/updatestep';
  const body = {teststepid: teststepid};
  return this.httpService.sendPostRequest(url,body);
}


}

 




