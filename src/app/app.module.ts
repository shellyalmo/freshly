import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FoodsComponent } from './foods/foods.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    IntroPageComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
