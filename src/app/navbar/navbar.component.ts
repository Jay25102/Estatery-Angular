import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowDownRound, matMenuRound, matCloseRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIcon, NgIf],
  viewProviders: [provideIcons({matKeyboardArrowDownRound, matMenuRound, matCloseRound})],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuVisible: string = "sidebar-hidden";
  managePropertySidebar: boolean = false;
  resourcesSidebar: boolean = false;
  manageProperty: string = "hidden";
  resources: string = "hidden";

  menuOpen(): void {
    this.menuVisible = "sidebar-opened";
  }
  menuClose(): void {
    this.menuVisible = "sidebar-closed";
    this.managePropertySidebar = false;
    this.resourcesSidebar = false;
  }
  managePropertySidebarToggle(): void {
    this.managePropertySidebar = !this.managePropertySidebar;
  }
  resourcesSidebarToggle(): void {
    this.resourcesSidebar = !this.resourcesSidebar;
  }

  managePropertyToggle(): void {
    if (this.manageProperty === "hidden") {
      this.manageProperty = "opened";
    }
    else if (this.manageProperty === "closed") {
      this.manageProperty = "opened"
    }
    else {
      this.manageProperty = "closed";
    }
  }
  managePropertyClose(): void {
    this.manageProperty = "closed";
  }
  resourcesToggle(): void {
    if (this.resources === "hidden") {
      this.resources = "opened";
    }
    else if (this.resources === "closed") {
      this.resources = "opened"
    }
    else {
      this.resources = "closed";
    }
  }
  resourcesClose(): void {
    this.resources = "closed";
  }

  
}
