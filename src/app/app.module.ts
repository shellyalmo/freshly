import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodSearchComponent } from './food-search/food-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    IntroPageComponent,
    FoodsComponent,
    FoodSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
