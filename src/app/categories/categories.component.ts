import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryModel} from '../shared/models/category.model';
import {CategoriesNav} from './models/categories-navigation.model';
import {ContextManagerService} from '../shared/services/context-manager.service';
import {CategoriesService} from '../shared/services/rest-api/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[];
  selectedCategory: CategoryModel;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private contextManager: ContextManagerService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.contextManager.storeContext(CategoriesNav.Categories_List);
    this.subscribeToSelectedCategory();
    this.router.navigate(['list'], {relativeTo: this.activatedRoute}).catch();
  }

  onContextChanged($event: CategoriesNav) {
    this.contextManager.storeContext($event);
    switch ($event) {
      case CategoriesNav.Category_Add: {
        this.router.navigate(['add'], {relativeTo: this.activatedRoute}).catch();
        break;
      }
      case CategoriesNav.Categories_List: {
        this.router.navigate(['list'], {relativeTo: this.activatedRoute}).catch();
        break;
      }
      case CategoriesNav.Category_View: {
        this.router.navigate([this.selectedCategory.name], {relativeTo: this.activatedRoute}).catch();
        break;
      }
      case CategoriesNav.Category_Edit: {
        this.router.navigate([this.selectedCategory.name, 'edit'], {relativeTo: this.activatedRoute}).catch();
        break;
      }
      default:
        break;
    }
  }

  onActionSelected($event: CategoriesNav) {
    switch ($event) {
      case CategoriesNav.Category_Delete: {
        this.contextManager.storeContext($event);
        this.categoriesService.deleteCategory(this.selectedCategory);
        this.contextManager.emptyCategory();
        break;
      }
      default:
        break;
    }
  }

  private subscribeToSelectedCategory() {
    this.contextManager.notifySelectedCategoryAsObservable$.subscribe(category => {
      this.selectedCategory = category;
    });
  }
}
