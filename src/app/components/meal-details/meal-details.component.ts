import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/services/meals.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  selectedMeal: any;

  constructor(private route: ActivatedRoute, private mealService: MealsService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(param => {
        return this.mealService.getMealDetails(param.id);
      }),
      tap(meal => {
        this.selectedMeal = meal;
      })
    ).subscribe();
  }

}
