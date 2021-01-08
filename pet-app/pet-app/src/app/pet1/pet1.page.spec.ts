import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pet1Page } from './pet1.page';

describe('Pet1Page', () => {
  let component: Pet1Page;
  let fixture: ComponentFixture<Pet1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pet1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pet1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
