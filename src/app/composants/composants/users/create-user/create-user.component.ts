import { Component, OnInit } from '@angular/core';




import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/users/users.service';

 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent   {

  
  
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  role!: string;
 
  constructor(private userService: UserService) {}

  onSubmit() {

    console.log('CreateUserComponent  onSubmit new user')

    const user: User = new User(this.id, this.name, this.email,this.password, this.phone, this.role);
    console.log(user)
     this.userService.addUser(user);

    this.id = 0;
    this.name = '';
    this.email = '';
    this.password ='';
    this.phone = '';
    this.role = '';
  }
}