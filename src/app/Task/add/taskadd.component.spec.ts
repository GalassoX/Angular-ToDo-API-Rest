import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponent } from './taskadd.component';

describe('AddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAddComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
