import { Depot } from "./depot";
import { Produit } from "./produit";
import { Stock } from "./stock";

export class Inventaire {

    constructor(
        public id: number,
        public code: string,
        public produit: Produit,
        public quantite: number,
        public date: Date,
        public depot: Depot,
        public codeInventaire: string
      ) {}

}
