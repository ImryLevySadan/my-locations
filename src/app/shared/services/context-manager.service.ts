import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CategoriesNav} from '../../categories/models/categories-navigation.model';

@Injectable({
  providedIn: 'root'
})
export class ContextManagerService {
  private notifyContextChanges: BehaviorSubject<CategoriesNav> = new BehaviorSubject<CategoriesNav>(null);
  notifyContextChangesAsObservable$ = this.notifyContextChanges.asObservable();

  constructor() {
  }

  storeContext(nav: CategoriesNav) {
   this.notifyContextChanges.next(nav);
  }
}
