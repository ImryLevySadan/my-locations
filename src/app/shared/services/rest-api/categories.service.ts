import {Injectable} from '@angular/core';
import {LocalStorageItems} from '../../models/crud.model';
import {CategoryModel} from '../../models/category.model';

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

  deleteCategory(selectedCategory: CategoryModel) {
    if (selectedCategory && selectedCategory.name) {
      const categories = JSON.parse(localStorage.getItem(LocalStorageItems.Categories));
      if (categories) {
        const index = categories.findIndex(category => category === selectedCategory.name);
        if (index !== -1) {
          categories.splice(index, 1);
          localStorage.setItem(LocalStorageItems.Categories, JSON.stringify(categories));
        }
      }
    }
  }
}
