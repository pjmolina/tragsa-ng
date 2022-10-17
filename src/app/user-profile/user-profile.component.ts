import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  name = '';
  role = '';

  private sub!: Subscription;

  constructor(private session: SessionService) {}

  ngOnInit(): void {
    this.sub = this.session.user$.subscribe({
      next: (user) => {
        this.name = user.name || '';
        this.role = user.role || '';
      },
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
