import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlavourComponent } from './add-flavour.component';

describe('AddFlavourComponent', () => {
  let component: AddFlavourComponent;
  let fixture: ComponentFixture<AddFlavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFlavourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFlavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
