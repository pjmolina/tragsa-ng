import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name?: string;
  role?: string;
}

@Injectable({ providedIn: 'root' })
export class SessionService {
  name?: string;
  role?: string;

  private user: BehaviorSubject<User> = new BehaviorSubject<User>({});
  public user$!: Observable<User>;

  constructor() {
    this.user$ = this.user.asObservable();
  }

  login(name: string, role: string) {
    this.name = name;
    this.role = role;

    this.user.next({
      name: name,
      role: role,
    });
  }
  logout() {
    this.name = undefined;
    this.role = undefined;

    this.user.next({});
  }
}
