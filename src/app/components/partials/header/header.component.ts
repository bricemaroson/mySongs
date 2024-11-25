import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
  
export class HeaderComponent {
  isProfilAdmin: boolean = true;
  isLoggedIn: boolean = false;
  username: string = 'Brice MAROSON'
constructor(){}
  ngOnInit() {

  }

  
}
