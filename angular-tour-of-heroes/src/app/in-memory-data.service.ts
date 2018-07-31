import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 11, name: 'a'},
      {id: 12, name: 'b'},
      {id: 13, name: 'c'},
      {id: 14, name: 'd'},
      {id: 15, name: 'e'},
      {id: 16, name: 'f'},
      {id: 17, name: 'g'},
      {id: 18, name: 'h'},
      {id: 19, name: 'i'},
      {id: 20, name: 'j'}
    ];
    return {heroes};
  }
}
