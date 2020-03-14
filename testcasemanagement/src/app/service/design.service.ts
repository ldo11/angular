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


 
}
