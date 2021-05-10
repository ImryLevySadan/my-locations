import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CategoriesService} from '../../shared/services/rest-api/categories.service';
import {ContextManagerService} from '../../shared/services/context-manager.service';
import {Observable} from 'rxjs';
import {CategoryModel} from '../../shared/models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  categoryName = new FormControl('');
  category$: Observable<CategoryModel>;
  source: CategoryModel;


  constructor(private categoriesService: CategoriesService,
              private contextManager: ContextManagerService) {
    this.category$ = this.contextManager.notifySelectedCategoryAsObservable$;

  }

  ngOnInit(): void {
    this.category$.subscribe(category => {
      if (category) {
        this.source = category;
        this.categoryName.setValue(category.name);
      }
    });
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.categoryName.value, this.source);
  }

}
