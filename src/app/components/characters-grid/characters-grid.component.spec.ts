import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGridComponent } from './characters-grid.component';

describe('CharactersGridComponent', () => {
  let component: CharactersGridComponent;
  let fixture: ComponentFixture<CharactersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
