import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface ApiResponse {
  id: string
  category_id: string
  category_name_display_only: string
  subcategory_name_display_only?: string
  keywords?: string
  name: string
  name_subtitle?: string
  pantry_output_display_only?: string
  pantry_tips?: string
  from_date_of_purchase_pantry_output_display_only?: string
  from_date_of_purchase_pantry_tips?: string
  pantry_after_opening_output_display_only?: string
  refrigerate_output_display_only?: string
  refrigerate_tips?: string
  from_date_of_purchase_refrigerate_output_display_only?: string
  from_date_of_purchase_refrigerate_tips?: string
  refrigerate_after_opening_output_display_only?: string
  refrigerate_after_thawing_output_display_only?: string
  freeze_output_display_only?: string
  freeze_tips?: string
  from_date_of_purchase_freeze_output_display_only?: string
  from_date_of_purchase_freeze_tips?: string
}

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent {
  public foodSearchResults: { foodCategory: string, foodName: string,  fridgeAfterPurchase?: string, freezeAfterPurchase?: string, fridgeAfterOpening?:string, pantryTips?: string}[] =[];

  constructor(private http: HttpClient){}

  public searchFood(foodToSearch: string){
    const queryParams = new HttpParams().set('q',foodToSearch);
    const url = 'http://localhost:3000/product_data';

    this.http.get<ApiResponse[]>(url, { params: queryParams })
    .subscribe((data) => {
      this.foodSearchResults = data.map((searchResult)=>{
        return { foodCategory: searchResult.category_name_display_only, foodName: searchResult.name,  fridgeAfterPurchase: searchResult.from_date_of_purchase_refrigerate_output_display_only, freezeAfterPurchase: searchResult.from_date_of_purchase_freeze_output_display_only, fridgeAfterOpening:searchResult.refrigerate_after_opening_output_display_only, pantryTips: searchResult.pantry_tips}
      })
    })
  }
}
