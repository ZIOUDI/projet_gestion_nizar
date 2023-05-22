import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDepotsComponent } from 'src/app/composants/composants/articles/popup-depots/popup-depots.component';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-ajouttransfere',
  templateUrl: './ajouttransfere.component.html',
  styleUrls: ['./ajouttransfere.component.scss']
})
export class AjouttransfereComponent {
  articles!: Article[];  // votre liste d'articles
  currentPage: number = 1; // la page actuelle (par défaut, la première page)
  itemsPerPage: number = 10; // nombre d'articles par page
  quantiteTransfert: number = 1; // quantité à transférer (par défaut, 1)

  pageSizeOptions = [5, 10, 20];

  constructor(private articleService: ArticlesService, private dialog: MatDialog) { }

  ngOnInit() {
    console.log('ArticlesListComponent - methode - ngOnInit');

    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  getArticlesForPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articles.slice(startIndex, endIndex);
  }

  pages() {
    const pagesCount = Math.ceil(this.articles.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }

  ouvrirPopup(article: Article): void {
    const dialogRef = this.dialog.open(PopupDepotsComponent, {
      width: '800px',
      height: '800px',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  controlerQuantite(article: Article) {
    if (this.quantiteTransfert > article.quantite) {
      console.log('La quantité à transférer ne peut pas dépasser la quantité disponible.');
    } else {
      // Effectuer les actions pour transférer l'article avec la quantité spécifiée
      console.log('Transfert de l\'article', article, 'avec une quantité de', this.quantiteTransfert);
    }
  }
}
