import { Component} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as JsBarcode from 'jsbarcode';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import QRCode from 'qrcode';

 
@Component({
  selector: 'app-popup-qr-code-articles',
  templateUrl: './popup-qr-code-articles.component.html',
  styleUrls: ['./popup-qr-code-articles.component.scss']
})
export class PopupQrCodeArticlesComponent {

  articles!: Article[];  // votre liste d'articles
  currentPage: number = 1; // la page actuelle (par défaut, la première page)
  itemsPerPage: number = 10; // nombre d'articles par page
  pageSizeOptions = [5, 10, 20];
  getArticlesForPages!: Article[];
  articlesParPages!: number[];
  searchId: string = '';
  filteredArticles: Article[] = [];

  constructor(
    public dialogRef: MatDialogRef<PopupQrCodeArticlesComponent>,
    private articleService: ArticlesService
  ) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => {
        console.log('-----PopupQrCodeArticlesComponent ----  ngOnInit() ---------- ')
        this.articles = articles;
        this.filteredArticles = articles;
        this.generateQRCodes();
      });
  }

  

  generateQRCodes() {
    for (let article of this.articles) {
      let qrCodeData = JSON.stringify({
        id: article.id,
        nom: article.nom,
        description: article.description,
        prix: article.prix,
        quantite: article.quantite,
        categorie: article.categorie,
        dateAjout: article.dateAjout.toString()
      });
  
      QRCode.toDataURL(qrCodeData)
        .then(url => {
          article.qrCodeUrl = url; // Ajoutez une propriété qrCodeUrl à votre interface Article pour stocker l'URL du code QR
        })
        .catch(error => {
          console.error('Erreur lors de la génération du code QR :', error);
        });
    }
  }
  

  applyFilter() {
    if (!this.searchId) {
      this.filteredArticles = [...this.articles];
    } else {
      this.filteredArticles = this.articles.filter(article =>
        article.id.toString().includes(this.searchId.toString())
        
        );
    }
  }
  

}
