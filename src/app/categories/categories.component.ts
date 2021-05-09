import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudActions} from '../shared/models/action.model';
import {CategoryModel} from '../shared/models/category.model';
import {CategoriesNav} from './models/categories-navigation.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[];
  contextManager: CategoriesNav;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contextManager = CategoriesNav.Categories_List;
    this.router.navigate(['list'], {relativeTo: this.activatedRoute}).catch();
  }
  onActionSelected($event: CrudActions) {
    switch ($event) {
      case CrudActions.Add: {
        this.contextManager = CategoriesNav.Categories_Add;
        this.router.navigate(['add'], {relativeTo: this.activatedRoute}).catch();
        break;
      }
      default:
        break;
    }
  }
}
