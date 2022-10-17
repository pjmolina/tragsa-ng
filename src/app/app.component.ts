import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService, User } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular0';

  userName = '';
  role = '';
  mensajes = '';
  isAdmin = false;

  sub1?: Subscription;
  sub2?: Subscription;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sub1 = this.sessionService.user$.subscribe({
      next: (data) => {
        this.mensajes += JSON.stringify(data) + ' ';
        this.isAdmin = isAdmin(data);
      },
      error: (err) => {},
    });

    this.sub2 = this.sessionService.user$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {},
    });
  }
  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
      this.sub1 = undefined;
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
      this.sub2 = undefined;
    }
  }

  onLogin() {
    this.sessionService.login(this.userName, this.role);
  }
  onLogout() {
    this.sessionService.logout();
  }
}

const isAdmin = (user: User): boolean => {
  return (user.role || '').toLowerCase() === 'admin';
};
