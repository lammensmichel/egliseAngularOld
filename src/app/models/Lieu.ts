enum Typelieu {
  eglise = 'eglise',
  crematorium = 'crematorium',
  cimetiere = 'cimetiere'
}

export class Lieu {
  constructor(
    public _id?: string,
    public rue?: string,
    public numero?: string,
    public codePostal?: string,
    public titre?: String,
    public typeLieu?: Typelieu,
  ) {

  }
}
