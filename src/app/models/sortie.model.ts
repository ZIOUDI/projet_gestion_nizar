import { Depot } from "./depot";
import { Produit } from "./produit";

 
export class Sortie {
     
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
  