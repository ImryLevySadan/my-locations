import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListComponent } from './categories-list.component';
import {SharedModules} from '../../shared/modules/shared-modules.module';

describe('CategoriesListComponent', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListComponent ],
      imports: [SharedModules]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
