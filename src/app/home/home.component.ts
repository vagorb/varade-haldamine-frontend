import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getUser();
  }

  getUser() {
    this.authenticationService.getUserRole().subscribe((role) => {
      window.sessionStorage.setItem('role', role);
    });
  }

  getRoleSessionStorage(): string {
    return window.sessionStorage.getItem('role');
  }
}
