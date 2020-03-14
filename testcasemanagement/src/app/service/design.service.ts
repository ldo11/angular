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
  const body = {projectname: projectname};
  return this.httpService.sendGetRequest(url,body);
}


findtestcasebyname(tcname){
  const url = 'design/n';
  const body = {tcname: tcname};
  return this.httpService.sendGetRequest(url,body);
}


addtestcase(){
  const url = 'design';
  const body = {tc:tc};
  return this.httpService.sendGetRequest(url,body);
}


updatetestcase(tcname){
  const url = 'design/update';
  const body = {tcname: tcname};
  return this.httpService.sendGetRequest(url,body);
}

addteststep(teststepname){
  const url = 'design/addstep';
  const body = {teststepname: teststepname};
  return this.httpService.sendGetRequest(url,body);
}


updateteststep(teststepid){
  const url = 'design/updatestep';
  const body = {teststepid: teststepid};
  return this.httpService.sendGetRequest(url,body);
}


}

 




