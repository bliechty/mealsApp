import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/services/meals.service';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  desserts: any[];
  americanMeals: any[];
  categories: any[];
  selectedMeals: any[];
  selectedCategory;

  constructor(private mealsService: MealsService, private router: Router) { }

  ngOnInit(): void {
    combineLatest([
      this.mealsService.getMealsByFirstLetter('b'),
      this.mealsService.getMealsByFirstLetter('c'),
      this.mealsService.getAllCategories()
    ]).subscribe(data => {
      const meals = data[0].concat(data[1]);
      
      this.desserts = meals.filter(meal => meal.strCategory === 'Dessert');
      this.americanMeals = meals.filter(meal => meal.strArea === 'American');
      this.categories = data[2];
    });
  }

  goToMealDetails(id: string) :void {
    this.router.navigate(['/meal-details', {id}]);
  }

  search(): void {
    this.mealsService.getMealsByCategory(this.selectedCategory).pipe(
      tap(data => {
        this.selectedMeals = data.meals;
        console.log(this.selectedMeals);
      })
    ).subscribe();
  }
}
