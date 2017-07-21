import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  constructor(private router: Router) {
  }
  ngOnInit() {

    if (typeof (Storage) == 'undefined' || sessionStorage.getItem('AccountToken') == null) {
      this.router.navigateByUrl("/login");
    }


  }
  logout() {
    sessionStorage.removeItem('AccountToken');
    this.router.navigate(["/login"]);
  }
}
