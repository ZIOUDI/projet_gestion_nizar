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

  
  nouvelleEntree!: Entree;
 
  constructor(private entreesService: EntreesService,  private router: Router) {}
 
  onSubmit() {
    this.entreesService.addEntrees(this.nouvelleEntree).subscribe(
      (response: Entree) => {
        console.log('La nouvelle entrée a été ajoutée avec succès :', response);
        this.router.navigate(['/app-entrees']);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la nouvelle entrée :', error);
      }
    );
  }
}
