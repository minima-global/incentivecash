import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardsPage } from './rewards.page';

describe('RewardsPage', () => {
  let component: RewardsPage;
  let fixture: ComponentFixture<RewardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
