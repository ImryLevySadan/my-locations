import { Component, OnInit } from '@angular/core';
import {Category} from '../../shared/models/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  constructor() { }

  ngOnInit(): void {
  }

}
