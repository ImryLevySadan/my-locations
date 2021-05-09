import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryModel} from '../shared/models/category.model';
import {CategoriesNav} from './models/categories-navigation.model';
import {ContextManagerService} from '../shared/services/context-manager.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private contextManager: ContextManagerService) {
  }

  ngOnInit(): void {
    this.contextManager.storeContext(CategoriesNav.Categories_List);
    this.router.navigate(['list'], {relativeTo: this.activatedRoute}).catch();
  }

  onActionSelected($event: CategoriesNav) {
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
      default:
        break;
    }
  }
}
