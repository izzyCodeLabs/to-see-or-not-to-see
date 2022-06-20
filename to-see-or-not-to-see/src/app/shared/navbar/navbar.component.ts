import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HTTPService } from '../http/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isAuthenticated = false;

  constructor(
    private httpService: HTTPService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.authService.currUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveMoviesToFirebase();
  }

  onFetchSeen() {
    this.httpService.fetchSeenMoviesFromFirebase().subscribe();
  }

  onFetchUpcoming() {
    this.httpService.fetchUpcomingMoviesFromFirebase().subscribe
  }

  onSignOut() {
    this.authService.signOut();
  }
}
