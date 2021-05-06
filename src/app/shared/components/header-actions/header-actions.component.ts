import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Category} from '../../models/category';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderActionsComponent implements OnInit {
  @Input() categories: Category[];

  constructor() {
  }

  ngOnInit(): void {
  }

  get isNoCategories(){
    return !this.categories || this.categories && this.categories.length === 0;
  }

}
