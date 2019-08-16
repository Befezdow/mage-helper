import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  private currentExp = 100;
  private maxExp = 500;
  private currentLevel = 7;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onBrandClick() {
    this.router.navigate(['/']);
  }

}
