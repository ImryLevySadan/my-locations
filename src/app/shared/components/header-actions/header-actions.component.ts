import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CrudActions} from '../../models/action.model';
import {CategoriesNav} from '../../../categories/models/categories-navigation.model';
import {ContextManagerService} from '../../services/context-manager.service';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})

export class HeaderActionsComponent implements OnInit {
  private _contextManager: CategoriesNav;
  CategoriesNav = CategoriesNav;
  @Output() actionSelected: EventEmitter<CrudActions> = new EventEmitter<CrudActions>();
  CrudActions = CrudActions;

  constructor(private managerService: ContextManagerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.managerService.notifyContextChangesAsObservable$.subscribe(nav => {
      this._contextManager = nav;
      this.cdr.detectChanges();
    });
  }

  onCategoryClicked($event: CrudActions) {
    this.actionSelected.emit($event);
  }

  get contextManager() {
    console.log('getter _contextManager', this._contextManager);
    return this._contextManager;
  }
}
