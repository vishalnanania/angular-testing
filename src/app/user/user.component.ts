import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: {};
  user: User;
  isLoggedIn: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('onInit');
    this.isLoggedIn = true;
    this.user = this.userService.getUser();
    this.userService.getDetail().then((data)=>{
      this.data = data;
    });
  }
  ngOnDestroy(){
    console.log('onDestroy');
  }
  ngOnChanges(){
    console.log('onchange');
  }
  ngOnDoCheck(){
    console.log('ondocheck');
  }
  ngAfterComponentInit(){
    console.log('ngAfterComponentInit');
  }
  ngAfterComponentChecked(){
    console.log('ngAfterComponentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

}
