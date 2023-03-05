import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesViewComponent } from './personajes-view.component';

describe('PersonajesViewComponent', () => {
  let component: PersonajesViewComponent;
  let fixture: ComponentFixture<PersonajesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
