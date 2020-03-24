import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  mealsByFirstLetter: string = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  mealDetails: string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  categoryUrl: string = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  categories: any[];

  constructor(private http: HttpClient) { }

  getMealsByFirstLetter(firstLetter: string): Observable<any> {
    return this.http.get(this.mealsByFirstLetter + firstLetter).pipe(
      map(meals => meals['meals'])
    );
  }

  getMealDetails(id: string): Observable<any> {
    return this.http.get(this.mealDetails + id).pipe(
      map(meal => meal['meals'][0])
    );
  }

  getAllCategories(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php').pipe(
      map((categories: {categories: any[]}) => categories.categories)
    );
  }

  getMealsByCategory(category): Observable<any> {
    return this.http.get(this.categoryUrl + category);
  }
}
