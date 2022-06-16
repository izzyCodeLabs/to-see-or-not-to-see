import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User.model';
import { tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const SIGN_UP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

const SIGN_IN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

export interface AuthResData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpTimer: any;
  currUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResData>(SIGN_UP_URL + environment.firebaseAPIKey, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;

          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResData>(SIGN_IN_URL + environment.firebaseAPIKey, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;

          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }

  signOut() {
    this.currUser.next(null);

    localStorage.removeItem('movie_user_data');

    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    // Create expiration date
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create new user
    const newUser = new User(email, userId, token, expDate);
    this.currUser.next(newUser);

    // Save new User to Local Storage
    localStorage.setItem('movie_user_data', JSON.stringify(newUser));
  }
}
