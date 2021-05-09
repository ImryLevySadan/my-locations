import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudActions} from '../../models/action.model';
import {CategoriesNav} from '../../../categories/models/categories-navigation.model';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderActionsComponent implements OnInit {
  @Input() contextManager: CategoriesNav;
  CategoriesNav = CategoriesNav;
  @Output() actionSelected: EventEmitter<CrudActions> = new EventEmitter<CrudActions>();
  CrudActions = CrudActions;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCategoryClicked($event: CrudActions) {
    this.actionSelected.emit($event);
  }
}
