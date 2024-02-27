import { Component } from '@angular/core';
import { Form } from './form';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
forms: any;
  title(title: any) {
  }
  
  constructor(private userService:UserService) { }
  ngOnInit():void{
    this.onGetusers();
  }
  onGetusers():void{
    this.userService.getUsers().subscribe(
      (response:Form[]) => console.log(response),
      (error:any) => console.log(error),
      ()=> console.log('Done getting users')
    );
  }
  
  
  }

