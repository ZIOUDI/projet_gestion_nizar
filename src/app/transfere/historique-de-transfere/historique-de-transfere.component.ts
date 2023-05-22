import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepotsComponent } from 'src/app/composants/composants/depots/depots.component';
import { Depot } from 'src/app/models/depot';
import { DepotsService } from 'src/app/services/depots/depots.service';
import { TransfereComponent } from '../transfere.component';

@Component({
  selector: 'app-historique-de-transfere',
  templateUrl: './historique-de-transfere.component.html',
  styleUrls: ['./historique-de-transfere.component.scss']
})
export class HistoriqueDeTransfereComponent {


  depots!: Depot[];



  constructor(private router: Router,private depotsService: DepotsService, private depotsComponent :TransfereComponent ) { }



  ngOnInit() {

    console.log(' DepotsListComponent - methode -  ngOnInit')


      this.depotsService.getDepots()
      .subscribe(depots => {
        this.depots = depots;
      });
  }




  ajouterDepot(){

   this.router.navigate(['/app-depots/create-depot']);
  }


  modifierDepot(id: number): void {
    this.router.navigate(['/app-depots/edit-depot', id]);
  }


  supprimerDepot(id: number): void {
     this.router.navigate(['/app-depots/delete-depot', id]);
  }
  search(searchTerm: string) {
    this.depotsService.searchArticles(searchTerm).subscribe(
      depots => this.depots = depots,
      error => console.log(error)
    );
  }

  onSearch(searchTerm: string) {
    this.search(searchTerm);
  }

  onClear() {
    this.search('');
  }



}


