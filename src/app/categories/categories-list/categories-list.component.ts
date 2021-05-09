import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/rest-api/categories.service';
import {ContextManagerService} from '../../shared/services/context-manager.service';
import {CategoriesNav} from '../models/categories-navigation.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: CategoryModel[] = [];
  selectedCategory: CategoryModel;

  constructor(private categoriesService: CategoriesService, private contextManager: ContextManagerService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().forEach(category => {
      this.categories.push(new CategoryModel(category));
    });
  }

  onCategorySelected(category: CategoryModel) {
    this.selectedCategory = category;
    this.contextManager.storeContext(CategoriesNav.Category_Selected);
  }
}
