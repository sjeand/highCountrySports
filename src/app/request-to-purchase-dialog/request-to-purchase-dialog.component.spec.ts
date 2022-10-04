import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToPurchaseDialogComponent } from './request-to-purchase-dialog.component';

describe('RequestToPurchaseDialogComponent', () => {
  let component: RequestToPurchaseDialogComponent;
  let fixture: ComponentFixture<RequestToPurchaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToPurchaseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
