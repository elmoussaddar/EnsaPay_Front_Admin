import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router, private tokenStorage:TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  logOutClicked(){
    this.router.navigate(['admin/logIn']);
    this.tokenStorage.signOut();
  }
}
