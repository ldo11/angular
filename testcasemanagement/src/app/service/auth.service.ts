import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../model/user';
import { RtStorageService } from './rt-storage.service';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private util: UtilService,
    private rtStorage: RtStorageService) {

  }

  signup(user: User) {
    const url = 'api/v1/auth/register';

    return this.httpService.sendPostRequest(url, user);
  }

  signin(username: string, password: string) {

    const url = 'api/v1/auth/login';
    const d = {
      username,
      password
    };

    const http = this.httpService;

    return new Promise((resolve, reject) => {
      http.sendPostRequest(url, d).then((respData: any) => {
        if (respData && respData.accessToken) {
          const token = respData.accessToken;
          const userId = respData.userId;
          const t = 30;
          this.util.setCookie(this.rtStorage.TOKEN_KEY, token, t);
          this.util.setCookie(this.rtStorage.CURR_USER_ID, userId, t);
          this.util.setCookie(this.rtStorage.LOGGEDIN_USER, respData.user, t);
        }

        resolve(true);
      })
      .catch((err) => reject(err));
    });

  }

  signOut() {

    return new Promise((resolve, reject) => {

      this.util.eraseCookie(this.rtStorage.LOGGEDIN_USER);
      this.util.eraseCookie(this.rtStorage.CURR_USER_ID);
      this.util.eraseCookie(this.rtStorage.TOKEN_KEY);


      setTimeout(resolve.bind(null, true), 100);
    });
  }

  getLoggedInUser(): User {
    // const loggedInUser = this.rtStorage.getData(this.rtStorage.LOGGEDIN_USER);
    const loggedInUserStr = this.util.getCookie(this.rtStorage.LOGGEDIN_USER);
    if (!loggedInUserStr || loggedInUserStr.length === 0) {
      return null;
    }

    const loggedInUser = JSON.parse(loggedInUserStr);

    return loggedInUser as User;
  }

  getToken(): string {

    return this.util.getCookie(this.rtStorage.TOKEN_KEY);
  }

  getLoggedInUserId(): number {
      const userIdText = this.util.getCookie(this.rtStorage.CURR_USER_ID);

      try {
          // tslint:disable-next-line:radix
          return parseInt(userIdText);
      } catch (e) {
          return -1;
      }
  }


}
