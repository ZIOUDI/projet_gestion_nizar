import { Stock } from "./stock";

export class Produit {

    constructor(
        public id: number,
        public code: string,
        public nom: string,
        public description: string,
        public prix: number,
        public stock: Stock[],
        public codeProduit: string
      ) {}
}
