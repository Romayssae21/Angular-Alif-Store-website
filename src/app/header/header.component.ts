import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 
})

export class HeaderComponent {
  activeButtonIndex: number | null = null;
  onButtonClick(index: number) {
    if (index === 0 && this.activeButtonIndex === 0) {
      this.activeButtonIndex = null;
    } else {
      this.activeButtonIndex = index;
    }
  }
}
