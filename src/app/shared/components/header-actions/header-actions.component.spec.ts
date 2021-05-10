import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderActionsComponent} from './header-actions.component';
import {SharedModules} from '../../modules/shared-modules.module';

describe('HeaderActionsComponent', () => {
  let component: HeaderActionsComponent;
  let fixture: ComponentFixture<HeaderActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderActionsComponent],
      imports: [SharedModules]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
