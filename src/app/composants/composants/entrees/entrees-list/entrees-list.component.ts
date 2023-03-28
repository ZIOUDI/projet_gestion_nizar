import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreesService } from 'src/app/services/sorties/entrees.service';
import { EntreeComponent } from '../entrees.component';

@Component({
  selector: 'app-entrees-list',
  templateUrl: './entrees-list.component.html',
  styleUrls: ['./entrees-list.component.scss']
})
export class EntreeListComponent {
  entrees!: Entree[];



  constructor(private router: Router,private entreesService: EntreesService, private entreesComponent :EntreeComponent ) { }




  ngOnInit() {
    console.log(' entreesListComponent - methode -  ngOnInit')


    this.entreesService.getEntree()
      .subscribe(entrees => {
        this.entrees = entrees;
      });
  }




  ouvrirPageNewEntrees(){

   this.router.navigate(['/app-entrees/create-entrees']);
  }


  ouvrirPageEditEntrees(id: number): void {
    this.router.navigate(['/app-entrees/edit-entrees', id]);
  }


  ouvrirPageDeleteEntrees(id: number): void {
     this.router.navigate(['/app-entrees/delete-entrees', id]);
  }



}


