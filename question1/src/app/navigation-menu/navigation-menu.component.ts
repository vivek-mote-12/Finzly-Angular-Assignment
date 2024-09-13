import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  selectedMenu: string = '';

  chooseMenu(menu: string) {
    this.selectedMenu = menu;

    let backgroundColor = '';
    switch (menu) {
      case 'Home':
        backgroundColor = 'orange';
        break;
      case 'Services':
        backgroundColor = 'lightgreen';
        break;
      case 'Contact us':
        backgroundColor = 'lightblue';
        break;
      default:
        backgroundColor = '';
    }
    
    document.body.style.backgroundColor = backgroundColor;
  }
}
