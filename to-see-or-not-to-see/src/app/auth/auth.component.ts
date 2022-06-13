import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<AuthResData>;
  isSignInMode = true;

  constructor() {}

  ngOnInit(): void {}
}
