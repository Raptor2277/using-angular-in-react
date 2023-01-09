import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentHelperComponent } from './development-helper.component';

describe('DevelopmentHelperComponent', () => {
  let component: DevelopmentHelperComponent;
  let fixture: ComponentFixture<DevelopmentHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
