import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AnaGuard implements CanActivate {
  constructor(private session: SessionService) {}

  canActivate(): Observable<boolean> {
    return this.comprobacion();
  }

  private comprobacion(): Observable<boolean> {
    return this.session.user$.pipe(
      first(),
      map((user) => {
        return user.name === 'Ana';
      })
    );
  }
}
