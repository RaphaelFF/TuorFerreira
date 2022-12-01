import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MercantilFerreirensePage } from './mercantil-ferreirense.page';

describe('MercantilFerreirensePage', () => {
  let component: MercantilFerreirensePage;
  let fixture: ComponentFixture<MercantilFerreirensePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MercantilFerreirensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MercantilFerreirensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
