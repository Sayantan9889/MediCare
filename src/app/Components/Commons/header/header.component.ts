import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route: Router) { }

  search(data: NgForm) {
    let Med = data.value.med;
    // console.log(Med);
    if (Med !== "") {  // checking if entered some text or not
      this.route.navigate([`search/${Med}`]);
    }
  }
}
