import { Rating } from './rating.model';

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
