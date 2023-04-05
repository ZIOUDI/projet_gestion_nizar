import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {

  Produit!: Produit[];



  constructor(private router: Router,private ProduitService: ProduitService, private ProduitsComponent :ProduitService) { }



  ngOnInit() {

    console.log(' DepotsListComponent - methode -  ngOnInit')


      this.ProduitService.getProduits()
      .subscribe(Produit => {
        this.Produit = Produit;
      });
  }




  ajouterProduit(){

   this.router.navigate(['/app-depots/create-depot']);
  }


  modifierProduit(id: number): void {
    this.router.navigate(['/app-depots/edit-depot', id]);
  }


  supprimerProduit(id: number): void {
     this.router.navigate(['/app-depots/delete-depot', id]);
  }

}
