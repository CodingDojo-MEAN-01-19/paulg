import { Cake } from '../models';

export const CAKES: Cake[] = [
    {
        id: randomId(1),
        baker: 'Alton Brown',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Birthday_cake.jpg',
        ratings: []
    },
    {
        id: randomId(2),
        baker: 'Carla Dean',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/NCI_butter.jpg',
        ratings: []
    },
    {
        id: randomId(3),
        baker: 'Hitori Nakamoto',
        url: 'https://static1.squarespace.com/static/52fd0e16e4b012d3649050e8/55e73509e4b04afd122f945f/5551262be4b015fc1acf233d/1537114124608/?format=1500w',
        ratings: []
    },
    {
        id: randomId(4),
        baker: 'Guy Fieri',
        url: 'https://static1.squarespace.com/static/530bca47e4b01f091beff818/592db8bd2e69cfd10c76ed2b/592db980bebafbf65e532c6a/1496168974884/IMG_4051.JPG.jpg',
        ratings: []
    },
    {
        id: randomId(5),
        baker: 'Paul Hollywood',
        url: 'https://i.dailymail.co.uk/i/pix/2015/08/24/11/2B8BD5BD00000578-3208632-image-a-2_1440411745402.jpg',
        ratings: []
    },
];

function randomId(num?): number {
  return Math.floor(Math.random() * 1000 + num);
}
