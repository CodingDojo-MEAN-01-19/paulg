export class Rating {
  id: number;
  rating: number;
  comment?: string;

  constructor(createId = true) {
    if (createId) {
      this.id = Math.floor(Math.random() * 1000);
    };
  };
}
