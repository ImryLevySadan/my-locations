import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CategoriesService} from '../../shared/services/rest-api/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryName = new FormControl('');

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
  }

  saveCategory() {
    this.categoriesService.addCategory(this.categoryName.value);
    this.categoryName.setValue('');
  }
}
