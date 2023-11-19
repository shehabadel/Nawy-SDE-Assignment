export interface Apartment {
    id: string;
    name: string;
    description: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    size: number;
    amenities: string[];
    photos: string[];
    available: boolean;
  }
  