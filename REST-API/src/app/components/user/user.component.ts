import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { UserTemplate } from 'src/app/datatemplates/usertemplate';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //attributes
  users:UserTemplate[];

  //constructor
  constructor(public userService:UserService) { }

  //init
  ngOnInit(): void
  {
    this.getUsers();
  }

  //crud operations
  getUsers()
  {
    this.userService.getUsers().subscribe(res=>
      {
        this.users = res as UserTemplate[];
      });
  }

  postUser(form:NgForm)
  {
    this.userService.postUser(this.GenerateUser(form)).subscribe(res=>{
      console.log(res);
      this.CleanForm(form);
      this.getUsers();
    });
  }

  putUser(form:NgForm)
  {
    let id = this.userService.user.id;
    this.userService.putUser(id,this.GenerateUser(form)).subscribe(req=>
      {
        this.getUsers();
        this.CleanForm(form);
      });
  }

  deleteUser(user:UserTemplate)
  {
    let id = user.id;
    this.userService.deleteUser(id).subscribe(res=>
      {
        this.getUsers();
      });
  }

  //additional methos
  SendOperation(form:NgForm)
  {
    if(this.userService.user.id)
      this.putUser(form);
    else
      this.postUser(form);
  }

  CleanForm(form?:NgForm)
  {
    if(form)
    {
      this.userService.user = new UserTemplate();
      form.reset();
    }
  }

  GenerateUser(form:NgForm)
  {
    let user = new UserTemplate();
    user.first_name = form.value.name;
    user.last_name = form.value.lastname;
    user.username=form.value.username;
    return user;
  }

  FetchUserData(user:UserTemplate) //for update
  {
    this.userService.user = user;
  }
}
