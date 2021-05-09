import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() contextChanges: EventEmitter<CategoriesNav> = new EventEmitter<CategoriesNav>();

  constructor(private managerService: ContextManagerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.managerService.notifyContextChangesAsObservable$.subscribe(nav => {
      this._contextManager = nav;
      this.cdr.detectChanges();
    });
  }

  onCategoryClicked($event: CategoriesNav) {
    this.contextChanges.emit($event);
  }

  get contextManager() {
    return this._contextManager;
  }
}
