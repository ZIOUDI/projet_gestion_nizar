import { Component, OnInit } from '@angular/core';


import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
 

export class UserListComponent implements OnInit {
  users!: User[];


 
  constructor(private UserService: UserService, private usersComponent :UsersComponent ) { }



  ngOnInit() {
    console.log(' UserListComponent - methode -  ngOnInit')

 
    this.UserService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }




  ouvrirPageNewUser(){
   this.usersComponent.afficheAjoutUser=true;
   this.usersComponent.afficheListUsers = false;
   this.usersComponent.afficheModifierUser = false;
  }

}