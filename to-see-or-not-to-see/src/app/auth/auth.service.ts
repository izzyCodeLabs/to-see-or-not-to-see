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

  autoSignIn() {
    // Check Local Storage for User
    const userData: UserData = JSON.parse(
      localStorage.getItem('movie_user_data')
    );

    if (!userData) return;

    const { email, id, _token, _tokenExpirationDate } = userData;

    // Create a Loaded User
    const loadedUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.currUser.next(loadedUser);

      // Setup Timer for Auto Logout
      const expDuration =
        new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.autoSignOut(expDuration);

      this.router.navigate(['have-seen']);
    }
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

  autoSignOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.signOut();
    }, expDuration);
  }
}
