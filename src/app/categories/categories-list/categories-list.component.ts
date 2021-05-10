import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/rest-api/categories.service';
import {ContextManagerService} from '../../shared/services/context-manager.service';
import {CategoriesNav} from '../models/categories-navigation.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: CategoryModel[] = [];
  selectedCategory: CategoryModel;
  subsc: Subscription[] = [];

  constructor(private categoriesService: CategoriesService, private contextManager: ContextManagerService) {
  }

  ngOnInit(): void {
    this.subscribeToCategorySelection();
    this.loadCategories();
  }

  onCategorySelected(category: CategoryModel) {
    this.selectedCategory = category;
    this.contextManager.storeCategory(category);
    this.contextManager.storeContext(CategoriesNav.Category_Selected);
  }

  private loadCategories() {
    const categories = this.categoriesService.getCategories();
    if (categories && categories.length > 0) {
      this.categories = [];
      this.categoriesService.getCategories().forEach(category => {
        this.categories.push(new CategoryModel(category));
      });
    } else {
      this.categories = [];
    }
  }

  private subscribeToCategorySelection() {
    const subsc = this.contextManager.notifySelectedCategoryAsObservable$.subscribe(context => {
      if (!context) {
        this.loadCategories();
      }
    });
    this.subsc.push(subsc);
  }

  ngOnDestroy() {
    this.subsc.forEach(subsc => subsc.unsubscribe());
  }
}
