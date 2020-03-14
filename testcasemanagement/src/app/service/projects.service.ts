import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private logger: LogService,
    private httpService: HttpService) {

}


addproject(){
  const url = 'project';
  const body = {id: id};
  return this.httpService.sendGetRequest(url,body);
}


findprojectbyid(id){
  const url = 'project/projectbyid';
  const body = {id: id};
  return this.httpService.sendGetRequest(url,body);
}

addtester(projectname){
  const url = 'project/addtester';
  const body = {projectname: projectname};
  return this.httpService.sendGetRequest(url,body);
}

findalltesters(projectname){
  const url = 'project/alltesters';
  const body = {projectname: projectname};
  return this.httpService.sendGetRequest(url,body);
}

}
