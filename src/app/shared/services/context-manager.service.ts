import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CategoriesNav} from '../../categories/models/categories-navigation.model';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ContextManagerService {
  private notifyContextChanges: BehaviorSubject<CategoriesNav> = new BehaviorSubject<CategoriesNav>(null);
  notifyContextChangesAsObservable$ = this.notifyContextChanges.asObservable();
  private notifySelectedCategory: BehaviorSubject<CategoryModel> = new BehaviorSubject<CategoryModel>(null);
  notifySelectedCategoryAsObservable$ = this.notifySelectedCategory.asObservable();

  constructor() {
  }

  storeContext(nav: CategoriesNav) {
    this.notifyContextChanges.next(nav);
  }

  storeCategory(category: CategoryModel) {
    this.notifySelectedCategory.next(category);
  }

  emptyCategory() {
    this.notifySelectedCategory.next(null);
  }
}
