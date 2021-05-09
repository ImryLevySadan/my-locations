import {Injectable} from '@angular/core';
import {LocalStorageItems} from '../../models/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
  }

  addCategory(category: string) {
    let categories = JSON.parse(localStorage.getItem(LocalStorageItems.Categories));
    if (categories) {
      categories.push(category);
    } else {
      categories = [category];
    }
    localStorage.setItem(LocalStorageItems.Categories, JSON.stringify(categories));
  }

  getCategories() {
    return JSON.parse(localStorage.getItem(LocalStorageItems.Categories)) || [];
  }
}
