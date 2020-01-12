import { IResUserLogin } from './../../../core/interfaces/IResUserLogin';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  returnTo = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.returnTo = params['return'] || '/courses';
    });

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value).subscribe((res: IResUserLogin) => {

      this.authService.setToken(res.bearer);
      this.authService.setInfo(res.name, res.email);

      this.router.navigate([this.returnTo]).then().catch();

    },
      err => {
        console.log(err);
        this.toastrService.error('User name or password is wrong','Error');
      })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
