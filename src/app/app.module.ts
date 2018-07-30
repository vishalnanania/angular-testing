import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DeptComponent } from './dept/dept.component';
import { DeptDirective } from './dept/dept.directive';
import { DeptPipe } from './dept/dept.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DeptComponent,
    DeptDirective,
    DeptPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
