import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SessionService, User } from '../services/session.service';

@Directive({
  selector: '[appRole]',
  providers: [],
})
export class RoleDirective implements OnInit {
  roles: string[] = [];

  private _appRole = '';
  @Input()
  get appRole(): string {
    return this._appRole;
  }
  set appRole(v: string) {
    this._appRole = v;

    this.roles = v.split(',').map((it) => it.trim());
  }

  constructor(
    private session: SessionService,
    private templateRef: TemplateRef<ViewContainerRef>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.session.user$.subscribe({
      next: (user) => {
        this.refresh(user);
      },
    });
  }

  refresh(user: User): void {
    if (this.roles.includes(user.role || '')) {
      // pinta el control
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // nada que pintar
      this.viewContainer.clear();
    }
  }
}
