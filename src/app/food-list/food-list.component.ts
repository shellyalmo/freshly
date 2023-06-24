import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

type food = { foodItemId:string, foodItemName: string, expirationDate: Date }

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent {
  public foods: food[] = [
    { foodItemId: crypto.randomUUID(), foodItemName: 'instant noodles', expirationDate: new Date('2020-12-31') },
    { foodItemId: crypto.randomUUID(), foodItemName: 'instant noodles', expirationDate: new Date('2023-12-31') },
  ]

  public foodCategory: string=""
  public daysFridgeAfterPurchase: string =""

  constructor(private http: HttpClient){}

  public deleteFood(foodItem: food) {
     this.foods = this.foods.filter(food => (food.foodItemId!==foodItem.foodItemId))
  }
  public addFood(newFood: string, newDate: Date | null) {
    if (newDate === null) {
      alert('Please enter a valid date')
      return
    }
    this.foods.push({ foodItemId: crypto.randomUUID(),foodItemName: newFood, expirationDate: newDate })
    this.foods.sort((a, b) => {return a.expirationDate.getTime() - b.expirationDate.getTime()})
  }

  public searchFood(foodToSearch: string){
    const queryParams = new HttpParams().set('q',foodToSearch);
    const url = 'http://localhost:3000/product_data';

    this.http.get<any[]>(url, { params: queryParams })
    .subscribe((data: any[]) => {
      this.foodCategory = JSON.stringify(data[0].category_name_display_only)
      this.daysFridgeAfterPurchase = JSON.stringify(data[0].from_date_of_purchase_refrigerate_output_display_only,
      );
    })
  }
}
