import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AccesoAlmacenGuard
  implements CanActivate, CanActivateChild, CanLoad
{
  constructor(private session: SessionService) {}

  canActivate(): Observable<boolean> {
    return this.comprobacion();
  }
  canActivateChild(): Observable<boolean> {
    return this.comprobacion();
  }

  canLoad(): Observable<boolean> {
    return this.comprobacion();
  }

  private comprobacion(): Observable<boolean> {
    return this.session.user$.pipe(
      first(),
      map((user) => {
        return user.role === 'admin' || user.role === 'operadorAlmacen';
      })
    );
  }
}
