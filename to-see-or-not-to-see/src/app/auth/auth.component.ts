import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<AuthResData>;
  isSignInMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onToggleAuthMode() {
    this.isSignInMode = !this.isSignInMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    const { email, password } = formObj.value;

    if (!email || !password) return;

    if (this.isSignInMode) {
      this.authObs = this.authService.signIn(email, password);
    } else {
      this.authObs = this.authService.signUp(email, password);
    }

    this.authObs.subscribe(
      (res) => {
        console.log('Auth Response SUCCESS:', res);
        this.router.navigate(['have-seen']);
      },
      (err) => {
        console.log('Auth Response ERROR:', err);
      }
    );

    formObj.reset();
  }
}
