import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from "./intro-page/intro-page.component";
import { FoodsComponent } from "./foods/foods.component";

const routes: Routes = [
  { path: 'foods', component: FoodsComponent },{ path: '', component: IntroPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
