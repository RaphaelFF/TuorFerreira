import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlorianoPeixotoPage } from './floriano-peixoto.page';

describe('FlorianoPeixotoPage', () => {
  let component: FlorianoPeixotoPage;
  let fixture: ComponentFixture<FlorianoPeixotoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlorianoPeixotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlorianoPeixotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
