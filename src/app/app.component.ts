import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  providers: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  ngOnInit(){
    this.title = 'Secular Hub Members';
  }
}
