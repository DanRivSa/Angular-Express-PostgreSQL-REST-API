import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserTemplate } from '../datatemplates/usertemplate';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  //attributes
  private req_URL='http://localhost:3000/users';
  public user:UserTemplate;
  //constructor
  constructor(private httpClient:HttpClient)
  {
    this.user = new UserTemplate();
  }

  //crud methods

  public getUsers()
  {
    return this.httpClient.get(this.req_URL);
  }

  public postUser(user:UserTemplate)
  {
    return this.httpClient.post(this.req_URL,user);
  }

  public putUser(id:number,user:UserTemplate)
  {
    return this.httpClient.put(`${this.req_URL}/${id}`,user);
  }

  public deleteUser(id:number)
  {
    return this.httpClient.delete(`${this.req_URL}/${id}`);
  }
}
