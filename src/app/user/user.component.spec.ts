import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { Promise } from 'q';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    userService = fixture.debugElement.injector.get(UserService);
  });

  it('should create user component', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    expect(userService.getUser()).toEqual(component.user);
  });

  it('should render title in a h1 tag', () => {
    expect(compiled.querySelector('h1').textContent).toContain('User logged in');
  });

  it('should display the user name if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(component.user['name']);
  });

  it('should not display the user name if user is not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).not.toContain(component.user['name']);
  });

  it('should fetch data from asnch function', async(() => {
    let spy = spyOn(userService, 'getDetail')
      .and.returnValue(Promise((resolve, reject) => {
        resolve("Data");
      }));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.data).toBe("Data");
    })
  }));

  // it('should fetch data from fake asnch function', fakeAsync(() => {
  //   let spy = spyOn(userService, 'getDetail')
  //     .and.returnValue(Promise((resolve, reject) => {
  //       resolve("Data");
  //     }));
  //   fixture.detectChanges();
  //   tick();
  //   expect(component.data).toBe("Data");
  // }));

});
