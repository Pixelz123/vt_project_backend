import type { LucideIcon } from 'lucide-react';

export interface Amenity {
  id: string;
  name: string;
  iconName: keyof typeof import('lucide-react'); // For dynamic icon loading
}

export interface Hotel {
  id: string;
  name: string;
  pricePerNight: number;
  rating: number; // 1-5
  images: Array<{ src: string; alt: string; dataAiHint: string }>;
  amenities: string[]; // List of amenity IDs
  location: string;
  description: string;
}

export interface TransportOption {
  id: string;
  mode: 'Flight' | 'Train' | 'Bus' | 'Ferry';
  company?: string;
  departureTime?: string;
  arrivalTime?: string;
  duration: string;
  fare: number;
  stops?: number;
}

export interface TransportHub {
  id:string;
  type: 'Airport' | 'Railway Station' | 'Bus Terminal';
  name: string;
  cityCode?: string; // e.g., CDG for airport
  distanceFromCenter: string;
}

export interface TravelAttraction {
  id: string;
  name: string;
  description: string;
  image: { src: string; alt: string; dataAiHint: string };
  type: string; // e.g., "Museum", "Landmark", "Park"
  distance?: string; // e.g., "5 min walk", "2 km"
}

export interface Destination {
  id: string; // e.g., "paris"
  name: string; // e.g., "Paris"
  country: string; // e.g., "France"
  description: string;
  heroImage: { src: string; alt: string; dataAiHint: string };
  hotels: Hotel[];
  transportOptions: TransportOption[];
  transportHubs: TransportHub[];
  attractions: TravelAttraction[];
}

export interface PopularDestinationInfo {
  name: string;
  id: string;
  image: string;
  country: string;
  dataAiHint: string;
}
