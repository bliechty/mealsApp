import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealDetailGuard } from './guards/meal-detail.guard';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'meals', component: MealListComponent},
  {path: 'meal-details', component: MealDetailsComponent, canActivate: [MealDetailGuard]},
  {path: 'meal-details/:id', component: MealDetailsComponent, canActivate: [MealDetailGuard]},
  {path: '**', redirectTo: 'meals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
