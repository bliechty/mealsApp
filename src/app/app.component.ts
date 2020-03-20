import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mealsApp';

  constructor(private router: Router) {

  }

  goToMeals() {
    this.router.navigate(['meals']);
  }
}
