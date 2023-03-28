import { Depot } from "./depot";
import { Mouvement } from "./mouvement";
import { Produit } from "./produit";



export class Entree extends Mouvement {

    constructor(
        public override id: number,
        public override code: string,
        public override produit: Produit,
        public override quantite: number,
        public override date: Date,
        public override depot: Depot,
        public codeEntree: string

      ) {
        super(id, code, produit, quantite, date, depot);
         }

}


