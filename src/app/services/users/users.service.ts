import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

 

  addUser(user: User): void {
    // Envoie une requête HTTP POST pour ajouter l'utilisateur à la base de données
    this.http.post<User>(this.usersUrl, user)
      .subscribe(
        (response: User) => {
          console.log('Utilisateur ajouté :', response);
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        }
      );
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url);
  }

}