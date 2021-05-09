import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: CategoryModel[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
