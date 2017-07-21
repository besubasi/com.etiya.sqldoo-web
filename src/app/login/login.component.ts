import { Component, OnInit } from '@angular/core';
import { Account } from 'app/domain/account';
import { LoginService } from 'app/login/login.service';
import { Router } from '@angular/router';
import {Message} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName: string;
  private password: string;
  private msgs: Message[] = [];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    if (typeof (Storage) !== 'undefined' && sessionStorage.getItem('AccountToken')) {
      this.router.navigateByUrl("/home");
    }

    /*
        this.utility.isLogged().then((result: boolean) => {
          if (result) {
            this.router.navigateByUrl("/home");
          }
    
        })
        */
    // this.callDynamicUserList();
  }
  /*callDynamicUserList(){
    this.loginService.callDynamicUserList().then(tt => this.login());
  }*/
  login() {

    let account = new Account();
    account.userName = this.userName;
    account.password = this.password;

    let result  = this.loginService.login(account).subscribe(
      res => this.handleLoginResponse(res),
      () => this.handleLoginResponse(null)
    );
    
    if(result){
      this.router.navigateByUrl("/home");
    }
  }

  handleLoginResponse(account: Account): boolean {

    if (account == null || account.token == null) {
      alert("error..Try again");
      this.msgs.push({ severity: 'error', summary: 'Wrong Account', detail: 'Try again' });
      return false;
    }

    if (typeof (Storage) !== 'undefined') {
      sessionStorage.setItem('AccountUserId', account.userId + "");
      sessionStorage.setItem('AccountToken', account.token);
      sessionStorage.setItem('AccountDescription', account.description);
    }
    
    this.router.navigateByUrl("/home");
    return true;
  }


}
