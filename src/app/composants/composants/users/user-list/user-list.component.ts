import { Component, OnInit } from '@angular/core';


import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';
import { UsersComponent } from '../users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
 

export class UserListComponent implements OnInit {
  users!: User[];


 
  constructor(private router: Router,private UserService: UserService, private usersComponent :UsersComponent ) { }



  ngOnInit() {
    console.log(' UserListComponent - methode -  ngOnInit')

 
    this.UserService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }




  ouvrirPageNewUser(){
     
   this.router.navigate(['/app-users/create-user']);
  }

   
  ouvrirPageEditUser(id: number): void {
    this.router.navigate(['/app-users/edit-user', id]);
  }

  
  ouvrirPageDeleteUser(id: number): void {
     this.router.navigate(['/app-users/delete-user', id]);
  }
  search(searchTerm: string) {
    this.UserService.searchArticles(searchTerm).subscribe(
      users => this.users =users,
      error => console.log(error)
    );
  }

  onSearch(searchTerm: string) {
    this.search(searchTerm);
  }

  onClear() {
    this.search('');
  }
  

}