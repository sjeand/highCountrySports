import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GunshowsComponent } from './gunshows.component';

describe('GunshowsComponent', () => {
  let component: GunshowsComponent;
  let fixture: ComponentFixture<GunshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
