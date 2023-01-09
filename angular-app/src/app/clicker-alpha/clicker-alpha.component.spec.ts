import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerAlphaComponent } from './clicker-alpha.component';

describe('ClickerAlphaComponent', () => {
  let component: ClickerAlphaComponent;
  let fixture: ComponentFixture<ClickerAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickerAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickerAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
