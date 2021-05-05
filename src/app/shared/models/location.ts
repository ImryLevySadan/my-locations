export class Location {
  name: string;
  address: string;
  coordinates: Coordinate;
  category: string;

  constructor(name: string, address: string, coordinates: Coordinate, category: string) {
    this.name = name;
    this.address = address;
    this.coordinates = coordinates;
    this.category = category;
  }

}

export interface Coordinate {
  lat: string;
  long: string;
}
