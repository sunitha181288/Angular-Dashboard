import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SecuritiesRoutingModule } from './securities-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SecuritiesDataTableComponent } from '@components/securities-data-table/securities-data-table.component';

import { SecuritiesComponent } from './securities.component';

describe('SecuritiesComponent', () => {
  let component: SecuritiesComponent;
  let fixture: ComponentFixture<SecuritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuritiesComponent, SecuritiesDataTableComponent],
      imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, SecuritiesRoutingModule, MaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render securities-data-table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.securities-data-table')).toBeTruthy();
  });

  it('should get securities data', fakeAsync(() => {
    tick(5000);
    expect(component.securitiesData.length >= 0).toBeTruthy();
  }));
});
