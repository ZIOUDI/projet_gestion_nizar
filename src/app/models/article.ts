export class Article {
  qrCodeUrl!: string;
  quantiteAffectee!: 0;
  constructor(
    public id: number,
    public nom: string,
    public description: string,
    public prix: number,
    public quantite: number,
 
    public categorie: string,
    public dateAjout: Date
  ) {}

  }
  