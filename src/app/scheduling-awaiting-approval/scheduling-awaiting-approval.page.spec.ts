import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulingAwaitingApprovalPage } from './scheduling-awaiting-approval.page';

describe('SchedulingAwaitingApprovalPage', () => {
  let component: SchedulingAwaitingApprovalPage;
  let fixture: ComponentFixture<SchedulingAwaitingApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingAwaitingApprovalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulingAwaitingApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
