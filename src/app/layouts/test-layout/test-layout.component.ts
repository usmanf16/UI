import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NgbDropdownModule],
  templateUrl: './test-layout.component.html',
  styleUrl: './test-layout.component.css'
})
export class TestLayoutComponent {
  constructor(private router : Router){

  }
  sidebarToggle = true;
  isSidebarOpened = true;
  username = localStorage.getItem("email")
  toggleSidebar(){
    this.sidebarToggle = !this.sidebarToggle;
    this.isSidebarOpened = !this.isSidebarOpened;

  }
  opensidebar(){
    if(!this.isSidebarOpened){
      this.sidebarToggle = true;
    }
  }
  closesidebar(){
    if(!this.isSidebarOpened){
      this.sidebarToggle = false;
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
