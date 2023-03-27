import { Depot } from "./depot";
import { Mouvement } from "./mouvement";
import { Produit } from "./produit";

 
export class Sortie extends Mouvement {
     
  constructor(
    public id: number,
    public code: string,
    public produit: Produit,
    public quantite: number,
    public date: Date,
    public depot: Depot,
    public codeSortie: string
  ) {}

  }
  