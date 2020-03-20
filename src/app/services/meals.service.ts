import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  mealsByFirstLetter: string = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

  constructor(private http: HttpClient) { }

  getMealsByFirstLetter(firstLetter: string): Observable<any> {
    return this.http.get(this.mealsByFirstLetter + firstLetter).pipe(
      map(meals => meals['meals'])
    );
  }
}
