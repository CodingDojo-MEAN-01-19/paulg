import { Task } from '../models';

export const TASKS: Task[] = [
  {
    id: randomId(),
    title: 'Call Mom',
    description: 'Call mom about planning her next visit.',
    complete: false
  },
  {
    id: 69,
    title: 'Clean Kitchen',
    description: 'Clean all the dishes, but make sure to clear out the fridge of all gross shit',
    complete: false
  },
  {
    id: randomId(),
    title: 'Clean Bathroom',
    description: 'Bleach the curtains, and bleach + scrub the windows',
    complete: false
  },
  {
    id: randomId(),
    title: 'Study for Interview',
    description: 'Review the QuBiTS wiki and Cracking the coding Interview book',
    complete: false
  },
  {
    id: randomId(),
    title: 'Pick Outfit',
    description: 'Pick out clothes for Monday interview',
    complete: false
  },
  {
    id: randomId(),
    title: 'Call Danny',
    description: 'Where is that beautiful ginger man? Where has he gone to?',
    complete: false
  }


];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
};
