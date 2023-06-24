import { Component } from '@angular/core';

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


}
