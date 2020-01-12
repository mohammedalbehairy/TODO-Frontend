import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.removeToken();
    this.authService.removeInfo();
    //this.authService.notifySubscribers(false);
    this.router.navigate(['/auth/login']).then().catch();
  }

  get name() {
    return localStorage.getItem('name');
  }

}
