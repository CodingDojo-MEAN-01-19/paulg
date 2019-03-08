export class Cake {
  id: number;
  baker: string;
  url: string;
  ratings?: Rating[];

  constructor(createId = true) {
    if (createId) {
      this.id = Math.floor(Math.random() * 1000);
    };
  };
}

export class Rating {
  constructor(
    public id: number,
    public stars: number,
    public comment: string
  ) {}
}
