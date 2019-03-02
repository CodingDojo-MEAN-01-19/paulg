export class Task {
  id: number;
  title: string;
  description: string;
  complete = false;

  constructor(createId = true) {
    if (createId) {
      this.id = Math.floor(Math.random() * 1000);
    };
  };
}

