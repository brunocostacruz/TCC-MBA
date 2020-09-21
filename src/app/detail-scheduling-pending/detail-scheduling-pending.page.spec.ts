import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSchedulingPendingPage } from './detail-scheduling-pending.page';

describe('DetailSchedulingPendingPage', () => {
  let component: DetailSchedulingPendingPage;
  let fixture: ComponentFixture<DetailSchedulingPendingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSchedulingPendingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSchedulingPendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
