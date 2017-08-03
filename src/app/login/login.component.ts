import { Component, OnInit } from '@angular/core';
import { User } from 'app/domain/User';
import { LoginService } from 'app/login/login.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';

import { TabpanelService } from "app/tabpanel/tabpanel.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName: string;
  private password: string;
  private msgs: Message[] = [];

  constructor(private loginService: LoginService, private tabpanelService: TabpanelService, private router: Router) { }

  ngOnInit() {

    if (typeof (Storage) !== 'undefined' && sessionStorage.getItem('currentUser')) {
      this.tabpanelService.clearTabList();
      this.router.navigateByUrl("/home");
    }

  }

  login() {

    this.loginService.login(this.userName, this.password).subscribe(
      res => {
        if (res != null && res.token != null) {
          if (typeof (Storage) !== 'undefined') {
            sessionStorage.setItem('currentUser', JSON.stringify(res));
          }


          this.tabpanelService.clearTabList();
          this.router.navigateByUrl("/home");
        } else {
          this.msgs.push({ severity: 'error', summary: 'Wrong Account', detail: 'Try again' });
        }
      },
      () => this.msgs.push({ severity: 'error', summary: 'Wrong Account', detail: 'Try again' })
    );

  }
}
