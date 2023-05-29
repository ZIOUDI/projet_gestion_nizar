import { Component, Inject } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<PopupQrCodeArticlesComponent>,
    //@Inject(MAT_DIALOG_DATA) public article: Article,
    private  articleService: ArticlesService
  ) { }

   

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => {
        console.log('-----PopupQrCodeArticlesComponent ----  ngOnInit() ---------- ')
        this.articles = articles;
        this.generateQRCodes();
      });
  }
 

  generateQRCodes() {
    for (let article of this.articles) {
      let qrCodeData = `
        Id: ${article.id}
        Nom: ${article.nom}
        Description: ${article.description}
        Prix: ${article.prix}
        Quantité: ${article.quantite}
        Catégorie: ${article.categorie}
        Date d'ajout: ${article.dateAjout.toString()}  // Conversion de la date en une chaîne de caractères
      `;
  
      QRCode.toDataURL(qrCodeData)
        .then(url => {
          article.qrCodeUrl = url; // Ajoutez une propriété qrCodeUrl à votre interface Article pour stocker l'URL du code QR
        })
        .catch(error => {
          console.error('Erreur lors de la génération du code QR :', error);
        });
    }
  }
  
  
  
  


  getArticlesForPage() {
    return this.getArticlesForPages
     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articles.slice(startIndex, endIndex);

  }




  pages() {
    return this.articlesParPages;

     const pagesCount = Math.ceil(this.articles.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }





  



}
