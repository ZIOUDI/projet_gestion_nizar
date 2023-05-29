import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/app/models/article';
import { Depot } from 'src/app/models/depot';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { DepotsService } from 'src/app/services/depots/depots.service';

@Component({
  selector: 'app-popup-depots',
  templateUrl: './popup-depots.component.html',
  styleUrls: ['./popup-depots.component.scss']
})
export class PopupDepotsComponent {



  depots!: Depot[];  // votre liste de depots
  selectedDepot!: Depot;
  //article !:Article;
  public successMessage: string | null = null;
  public errorMessage: string | null = null;


  constructor(
    public dialogRef: MatDialogRef<PopupDepotsComponent>,
    @Inject(MAT_DIALOG_DATA) public article: Article,
    private depotsService: DepotsService,
    private articleService: ArticlesService
  ) { }



  ngOnInit() {

    console.log(' PopupDepotsComponent - ngOnInit, - articleID : ', this.article)
    this.selectedDepot = new Depot(0, '', '', '', '', 0, [], [], [], 0);

    this.depotsService.getDepots()
      .subscribe(depots => {
        this.depots = depots;
      });
  }



  affecterArticle(depot: Depot, article: Article): void {
    article.dateAjout = new Date(); // Définir la date d'ajout sur la date actuelle

    this.depotsService.affecterArticleAunDepot(depot, article)
      .subscribe(depot => {
        // Succès : le dépôt a été mis à jour avec le nouvel article
        console.log('Le dépôt a été mis à jour avec le nouvel article : ', depot);
        this.successMessage = `L'article a été affecté au dépôt ${depot.nom}`;
        this.errorMessage = null;


            // Soustraire la quantité affectée de la quantité en stock de l'article
      const quantiteAffectee = article.quantiteAffectee;
      article.quantite -= quantiteAffectee;

      // Mettre à jour la quantité de l'article dans la base de données
      this.articleService.updateArticle(article.id, article)
        .subscribe(() => {
          console.log('La quantité de l\'article a été mise à jour dans la base de données');
        }, (error) => {
          console.error('Erreur lors de la mise à jour de la quantité de l\'article dans la base de données : ', error);
        });


        setTimeout(() => {
          this.dialogRef.close();
        }, 2500);
      },
      (error) => {
        // Erreur : la mise à jour du dépôt a échoué
        console.error('La mise à jour du dépôt a échoué : ', error);
        this.successMessage = null;
        this.errorMessage = `Erreur : la mise à jour du dépôt a échoué (${error.message})`;
      });
  }

  }


