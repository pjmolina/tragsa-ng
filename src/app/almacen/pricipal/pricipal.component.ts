import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricipal',
  templateUrl: './pricipal.component.html',
  styleUrls: ['./pricipal.component.scss'],
})
export class PricipalComponent {
  constructor(private router: Router) {}

  gotoHome(): void {
    this.router.navigate(['/inicio']);
  }
}
