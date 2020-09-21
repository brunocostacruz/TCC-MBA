import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingServicesPage } from './pending-services.page';

describe('PendingServicesPage', () => {
  let component: PendingServicesPage;
  let fixture: ComponentFixture<PendingServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
