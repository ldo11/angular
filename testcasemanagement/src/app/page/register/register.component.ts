import {Component, Injectable, Injector} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth.service';
import {LogService} from '../../service/log.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;
  constructor(private injector: Injector,
              private logger: LogService,
              private router: Router,
              private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }


  onRegisterFormSubmit() {

    this.authService.signup(this.user)
      .then(createdUser => {
        this.logger.info(createdUser);

        this.router.navigate([ '/login' ]).then();
      })
      .catch(err => {
        console.log(err);
      });

  }

}
