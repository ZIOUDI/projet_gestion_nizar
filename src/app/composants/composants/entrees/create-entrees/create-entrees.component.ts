import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Entree } from 'src/app/models/entree.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { EntreesService } from 'src/app/services/entrees/entrees.service';

@Component({
  selector: 'app-create-entrees',
  templateUrl: './create-entrees.component.html',
  styleUrls: ['./create-entrees.component.scss']
})
export class CreateEntreeComponent {

  
  nouvelleEntree: Article = new Article(0, '', '', 0,0,'', new Date());
 
  constructor(private entreesService: ArticlesService,  private router: Router) {}
 
  onSubmit() {
    this.entreesService.createArticle(this.nouvelleEntree).subscribe(
      () => {
        console.log('La nouvelle entrée a été ajoutée avec succès :');
        this.router.navigate(['/app-articles']);
         // Réinitialisation du formulaire
    this.nouvelleEntree = new Article(0, '', '', 0,0,'', new Date());
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la nouvelle entrée :', error);
      }
    );
  }
}