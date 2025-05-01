export class TravelEntry {
  id: number;
  location: string;
  description: string;
  photos: string;
  date: Date;

  constructor(
    id: number,
    location: string,
    description: string,
    photos: string,
    date: Date
  ) {
    this.id = id;
    this.location = location;
    this.description = description;
    this.photos = photos;
    this.date = typeof date === 'string' ? new Date(date) : date; 
  }
}
