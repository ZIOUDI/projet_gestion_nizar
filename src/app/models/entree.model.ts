import { Depot } from "./depot";
import { Mouvement } from "./mouvement";
import { Produit } from "./produit";



export class Entree  {
     
    constructor(
        public id: number,
        public code: string,
        public produit: Produit,
        public quantite: number,
        public date: Date,
        public depot: Depot,
        public codeEntree: string

      ) {}

}


