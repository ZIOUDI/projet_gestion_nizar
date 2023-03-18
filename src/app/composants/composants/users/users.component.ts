import { Component, Inject, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';

 

 @Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  users: User[] | undefined;
  selectedUser: any;

  constructor(@Inject(UserService) private userService: UserService) {}

   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

 

}
