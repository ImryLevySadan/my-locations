import { Component, OnInit } from '@angular/core';
import {ContextManagerService} from '../../shared/services/context-manager.service';
import {CategoryModel} from '../../shared/models/category.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
  category$: Observable<CategoryModel>;

  constructor(private contextManager: ContextManagerService) {
    this.category$ = this.contextManager.notifySelectedCategoryAsObservable$;
  }

  ngOnInit(): void {
    }

}
