import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEvaluacionComponent } from './dashboard-evaluacion.component';

describe('DashboardEvaluacionComponent', () => {
  let component: DashboardEvaluacionComponent;
  let fixture: ComponentFixture<DashboardEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEvaluacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
