import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreesService } from 'src/app/services/sorties/entrees.service';

@Component({
  selector: 'app-create-entrees',
  templateUrl: './create-entrees.component.html',
  styleUrls: ['./create-entrees.component.scss']
})
export class CreateEntreeComponent {
  id!: number;
    dateEntree!: Date;
    quantite!: number;
    prixUnitaire!: number;
    total!: number;
    produitId!: number;
    fournisseurId!: number;

  constructor(private userService: EntreesService,  private router: Router) {}

 /*  onSubmit() {

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
  } */

  onSubmit() {
    console.log('CreateUserComponent onSubmit new user');

    const entree: Entree  = new Entree (this.id, this.dateEntree, this.quantite, this.prixUnitaire , this.total, this.produitId, this.fournisseurId);
    console.log(entree);

    this.userService. addEntrees(entree).subscribe((response: Entree) => {
      console.log('Utilisateur ajouté bloc CreateUserComponent onSubmit :', response);
      this.router.navigate(['/app-users']);
    }, (error: any) => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    });

    this.id = 0;
    this.dateEntree ;
    this.quantite = 0;
    this.prixUnitaire = 0;
    this.total = 0;
    this.produitId = 0;
    this.fournisseurId= 0;

  }
}
