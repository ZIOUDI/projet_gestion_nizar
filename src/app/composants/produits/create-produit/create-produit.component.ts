import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Produit } from "src/app/models/produit";
import { ProduitService } from "src/app/services/produit.service";



@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent {

  constructor(private produitService:ProduitService ,  private router: Router) {}


  nouveauProduit: Produit = new Produit(0, '', '', '',  0, [], '');

  onSubmit() {
    // Enregistrement du nouveau dépôt dans la base de données ou autre traitement
    this.produitService.addProduit(this.nouveauProduit).subscribe((response :Produit) => {
      this.router.navigate(['/app-produit']);
    })
    console.log('Nouveau dépôt créé : ', this.nouveauProduit);
    
    // Réinitialisation du formulaire
    this.nouveauProduit = new Produit(0, '', '', '',  0, [], '');
  }

}  
