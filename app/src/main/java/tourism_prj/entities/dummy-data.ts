
// import type { Destination, Hotel, TransportOption, TransportHub, PopularDestinationInfo, Amenity, TravelAttraction } from './types';

// export const ALL_HOTEL_AMENITIES: Amenity[] = [
//   { id: 'wifi', name: 'Free WiFi', iconName: 'Wifi' },
//   { id: 'pool', name: 'Swimming Pool', iconName: 'Waves' },
//   { id: 'parking', name: 'Parking', iconName: 'ParkingCircle' },
//   { id: 'restaurant', name: 'Restaurant', iconName: 'Utensils' },
//   { id: 'gym', name: 'Fitness Center', iconName: 'Dumbbell' },
//   { id: 'ac', name: 'Air Conditioning', iconName: 'AirVent' },
//   { id: 'spa', name: 'Spa', iconName: 'Sparkles' },
//   { id: 'bar', name: 'Bar/Lounge', iconName: 'GlassWater' },
//   { id: 'pets', name: 'Pet Friendly', iconName: 'Dog' },
// ];

// // --- New Delhi Data ---
// const newDelhiHotels: Hotel[] = [
//   {
//     id: 'ndh001',
//     name: 'The Imperial Hotel',
//     pricePerNight: 300, // Approx INR 25000
//     rating: 4.8,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'The Imperial Hotel exterior', dataAiHint: 'luxury hotel' }, { src: 'https://placehold.co/600x400.png', alt: 'The Imperial Hotel room', dataAiHint: 'hotel suite' }],
//     amenities: ['wifi', 'pool', 'gym', 'restaurant', 'spa', 'bar', 'ac'],
//     location: 'Janpath, Connaught Place',
//     description: 'A historic luxury hotel offering a blend of Victorian, colonial, and art deco styles, located in the heart of Delhi.',
//   },
//   {
//     id: 'ndh002',
//     name: 'Haveli Dharampura',
//     pricePerNight: 150, // Approx INR 12500
//     rating: 4.5,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'Haveli Dharampura courtyard', dataAiHint: 'heritage hotel' }, { src: 'https://placehold.co/600x400.png', alt: 'Haveli Dharampura room', dataAiHint: 'traditional room' }],
//     amenities: ['wifi', 'restaurant', 'ac'],
//     location: 'Chandni Chowk, Old Delhi',
//     description: 'Experience Old Delhi\'s charm in this restored 19th-century haveli, offering a unique cultural stay.',
//   },
// ];

// const newDelhiAttractions: TravelAttraction[] = [
//   {
//     id: 'nda001',
//     name: 'India Gate',
//     description: 'A war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'India Gate', dataAiHint: 'delhi monument' },
//     type: 'Monument',
//     distance: 'Central Delhi',
//   },
//   {
//     id: 'nda002',
//     name: 'Humayun\'s Tomb',
//     description: 'The tomb of the Mughal Emperor Humayun, commissioned by his first wife. A UNESCO World Heritage site and a precursor to the Taj Mahal.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Humayun\'s Tomb', dataAiHint: 'mughal architecture' },
//     type: 'Historic Site',
//     distance: 'Nizamuddin East',
//   },
// ];

// // --- Mumbai Data ---
// const mumbaiHotels: Hotel[] = [
//   {
//     id: 'mh001',
//     name: 'The Taj Mahal Palace',
//     pricePerNight: 350, // Approx INR 29000
//     rating: 4.9,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'The Taj Mahal Palace exterior', dataAiHint: 'iconic hotel' }, { src: 'https://placehold.co/600x400.png', alt: 'The Taj Mahal Palace sea view room', dataAiHint: 'luxury room' }],
//     amenities: ['wifi', 'pool', 'gym', 'restaurant', 'spa', 'bar', 'ac'],
//     location: 'Colaba, overlooking Gateway of India',
//     description: 'An iconic luxury hotel offering breathtaking views of the Arabian Sea and the Gateway of India.',
//   },
//   {
//     id: 'mh002',
//     name: 'Abode Bombay',
//     pricePerNight: 120, // Approx INR 10000
//     rating: 4.3,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'Abode Bombay lobby', dataAiHint: 'boutique hotel' }, { src: 'https://placehold.co/600x400.png', alt: 'Abode Bombay room decor', dataAiHint: 'stylish room' }],
//     amenities: ['wifi', 'ac', 'restaurant'],
//     location: 'Colaba',
//     description: 'A charming boutique hotel with vintage-inspired decor, offering a cozy stay in a prime location.',
//   },
// ];

// const mumbaiAttractions: TravelAttraction[] = [
//   {
//     id: 'ma001',
//     name: 'Gateway of India',
//     description: 'An arch-monument built during the 20th century in Mumbai. It is a popular tourist spot and a symbol of the city.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Gateway of India', dataAiHint: 'mumbai landmark' },
//     type: 'Monument',
//     distance: 'Colaba Waterfront',
//   },
//   {
//     id: 'ma002',
//     name: 'Marine Drive',
//     description: 'A 3.6-kilometre-long boulevard in South Mumbai. It is a C-shaped six-lane concrete road along the coast, also known as the Queen\'s Necklace.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Marine Drive at night', dataAiHint: 'city skyline' },
//     type: 'Promenade',
//     distance: 'South Mumbai',
//   },
// ];

// // --- Jaipur Data ---
// const jaipurHotels: Hotel[] = [
//   {
//     id: 'jh001',
//     name: 'Rambagh Palace',
//     pricePerNight: 400, // Approx INR 33000
//     rating: 4.9,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'Rambagh Palace gardens', dataAiHint: 'palace hotel' }, { src: 'https://placehold.co/600x400.png', alt: 'Rambagh Palace suite', dataAiHint: 'royal suite' }],
//     amenities: ['wifi', 'pool', 'gym', 'restaurant', 'spa', 'bar', 'ac'],
//     location: 'Bhawani Singh Road',
//     description: 'Once the residence of the Maharaja of Jaipur, this opulent palace hotel offers a regal experience.',
//   },
//   {
//     id: 'jh002',
//     name: 'Samode Haveli',
//     pricePerNight: 180, // Approx INR 15000
//     rating: 4.6,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'Samode Haveli courtyard pool', dataAiHint: 'heritage courtyard' }, { src: 'https://placehold.co/600x400.png', alt: 'Samode Haveli room interior', dataAiHint: 'rajasthani decor' }],
//     amenities: ['wifi', 'pool', 'restaurant', 'ac', 'spa'],
//     location: 'Gangapole',
//     description: 'A traditional Indian haveli set in a verdant garden, offering an atmosphere of quiet elegance.',
//   },
// ];

// const jaipurAttractions: TravelAttraction[] = [
//   {
//     id: 'ja001',
//     name: 'Hawa Mahal',
//     description: 'The "Palace of Winds," a distinctive five-story facade with 953 small windows, built for royal women to observe street festivities.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Hawa Mahal', dataAiHint: 'jaipur palace' },
//     type: 'Palace',
//     distance: 'Pink City',
//   },
//   {
//     id: 'ja002',
//     name: 'Amber Fort (Amer Fort)',
//     description: 'A majestic fort located high on a hill, known for its artistic Hindu style elements and grand courtyards.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Amber Fort', dataAiHint: 'rajasthan fort' },
//     type: 'Fort',
//     distance: 'Amer, 11 km from Jaipur',
//   },
// ];

// // --- Agra Data ---
// const agraHotels: Hotel[] = [
//   {
//     id: 'ah001',
//     name: 'The Oberoi Amarvilas',
//     pricePerNight: 500, // Approx INR 41500
//     rating: 4.9,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'The Oberoi Amarvilas Taj Mahal view', dataAiHint: 'taj mahal view' }, { src: 'https://placehold.co/600x400.png', alt: 'The Oberoi Amarvilas pool', dataAiHint: 'luxury pool' }],
//     amenities: ['wifi', 'pool', 'gym', 'restaurant', 'spa', 'bar', 'ac'],
//     location: 'Near the Taj Mahal',
//     description: 'Unparalleled views of the Taj Mahal from every room. Experience Mughal-inspired architecture and lavish hospitality.',
//   },
//   {
//     id: 'ah002',
//     name: 'ITC Mughal, a Luxury Collection Resort & Spa',
//     pricePerNight: 200, // Approx INR 16500
//     rating: 4.7,
//     images: [{ src: 'https://placehold.co/600x400.png', alt: 'ITC Mughal gardens', dataAiHint: 'mughal garden' }, { src: 'https://placehold.co/600x400.png', alt: 'ITC Mughal room', dataAiHint: 'resort room' }],
//     amenities: ['wifi', 'pool', 'gym', 'restaurant', 'spa', 'bar', 'ac'],
//     location: 'Taj Ganj',
//     description: 'Sprawling resort set amidst 35 acres of lush gardens, offering a tranquil escape near historic sites.',
//   },
// ];

// const agraAttractions: TravelAttraction[] = [
//   {
//     id: 'aa001',
//     name: 'Taj Mahal',
//     description: 'An ivory-white marble mausoleum on the south bank of the Yamuna river. A UNESCO World Heritage site and one of the Seven Wonders of the World.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Taj Mahal', dataAiHint: 'taj mahal india' },
//     type: 'Mausoleum',
//     distance: 'Taj Ganj',
//   },
//   {
//     id: 'aa002',
//     name: 'Agra Fort',
//     description: 'A historical fort in the city of Agra. It was the main residence of the emperors of the Mughal Dynasty until 1638.',
//     image: { src: 'https://placehold.co/400x300.png', alt: 'Agra Fort', dataAiHint: 'mughal fort' },
//     type: 'Fort',
//     distance: 'Near Taj Mahal',
//   },
// ];


// const destinationsData: Record<string, Destination> = {
//   "new-delhi": {
//     id: "new-delhi",
//     name: "New Delhi",
//     country: "India",
//     description: "The capital city of India, offering a rich tapestry of history, culture, and modernity. Explore ancient monuments, bustling markets, and diverse cuisines.",
//     heroImage: { src: 'https://placehold.co/1200x600.png', alt: 'Lotus Temple, New Delhi', dataAiHint: 'delhi landmark' },
//     hotels: newDelhiHotels,
//     transportOptions: [
//       { id: 'ndt001', mode: 'Flight', company: 'IndiGo', duration: '2h (from Mumbai)', fare: 60, stops: 0 }, // Approx INR 5000
//       { id: 'ndt002', mode: 'Train', company: 'Indian Railways', duration: '17h (from Mumbai)', fare: 25, stops: 0 }, // Approx INR 2000
//       { id: 'ndt003', mode: 'Bus', company: 'State Transport', duration: '5h (from Jaipur)', fare: 10 }, // Approx INR 800
//     ],
//     transportHubs: [
//       { id: 'ndth001', type: 'Airport', name: 'Indira Gandhi International Airport', cityCode: 'DEL', distanceFromCenter: '30-45 min' },
//       { id: 'ndth002', type: 'Railway Station', name: 'New Delhi Railway Station (NDLS)', distanceFromCenter: 'Central' },
//       { id: 'ndth003', type: 'Bus Terminal', name: 'ISBT Kashmiri Gate', distanceFromCenter: '20 min' },
//     ],
//     attractions: newDelhiAttractions,
//   },
//   "mumbai": {
//     id: "mumbai",
//     name: "Mumbai",
//     country: "India",
//     description: "The vibrant financial capital and entertainment hub of India. Discover colonial architecture, bustling bazaars, Bollywood glamour, and a stunning coastline.",
//     heroImage: { src: 'https://placehold.co/1200x600.png', alt: 'Gateway of India, Mumbai', dataAiHint: 'mumbai landmark' },
//     hotels: mumbaiHotels,
//     transportOptions: [
//       { id: 'mt001', mode: 'Flight', company: 'Air India', duration: '2h (from Delhi)', fare: 60, stops: 0 },
//       { id: 'mt002', mode: 'Train', company: 'Indian Railways', duration: '6h (from Goa - Konkan Railway)', fare: 15 }, // Approx INR 1200
//     ],
//     transportHubs: [
//       { id: 'mth001', type: 'Airport', name: 'Chhatrapati Shivaji Maharaj International Airport', cityCode: 'BOM', distanceFromCenter: '45-60 min' },
//       { id: 'mth002', type: 'Railway Station', name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)', distanceFromCenter: 'South Mumbai' },
//       { id: 'mth003', type: 'Railway Station', name: 'Mumbai Central (MMCT)', distanceFromCenter: 'Central' },
//     ],
//     attractions: mumbaiAttractions,
//   },
//    "jaipur": {
//     id: "jaipur",
//     name: "Jaipur",
//     country: "India",
//     description: "The Pink City, known for its stunning forts, majestic palaces, vibrant markets, and rich Rajasthani culture.",
//     heroImage: { src: 'https://placehold.co/1200x600.png', alt: 'Hawa Mahal, Jaipur', dataAiHint: 'jaipur palace' },
//     hotels: jaipurHotels,
//     transportOptions: [
//         { id: 'jt001', mode: 'Flight', company: 'SpiceJet', duration: '1h (from Delhi)', fare: 40 }, // Approx INR 3300
//         { id: 'jt002', mode: 'Train', company: 'Indian Railways', duration: '5h (from Delhi)', fare: 10 },
//         { id: 'jt003', mode: 'Bus', company: 'RSRTC', duration: '6h (from Delhi)', fare: 8 }, // Approx INR 650
//     ],
//     transportHubs: [
//         { id: 'jth001', type: 'Airport', name: 'Jaipur International Airport', cityCode: 'JAI', distanceFromCenter: '25 min' },
//         { id: 'jth002', type: 'Railway Station', name: 'Jaipur Junction Railway Station (JP)', distanceFromCenter: 'Central' },
//     ],
//     attractions: jaipurAttractions,
//   },
//   "agra": {
//     id: "agra",
//     name: "Agra",
//     country: "India",
//     description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World. Explore Mughal architecture and rich history.",
//     heroImage: { src: 'https://placehold.co/1200x600.png', alt: 'Taj Mahal, Agra', dataAiHint: 'taj mahal india' },
//     hotels: agraHotels,
//     transportOptions: [
//         { id: 'at001', mode: 'Train', company: 'Indian Railways (Gatimaan Express)', duration: '1h 40m (from Delhi)', fare: 18 }, // Approx INR 1500
//         { id: 'at002', mode: 'Bus', company: 'UPSRTC', duration: '3-4h (from Delhi via Expressway)', fare: 7 }, // Approx INR 600
//     ],
//     transportHubs: [
//         { id: 'ath001', type: 'Airport', name: 'Agra Airport (Kheria Airport)', cityCode: 'AGR', distanceFromCenter: '20 min (limited flights)' },
//         { id: 'ath002', type: 'Railway Station', name: 'Agra Cantt Railway Station (AGC)', distanceFromCenter: '15 min' },
//     ],
//     attractions: agraAttractions,
//   }
// };

// export const getDestinationData = (cityId: string): Destination | undefined => {
//   const destination = destinationsData[cityId.toLowerCase()];
//   if (destination && !destination.attractions) {
//     return { ...destination, attractions: [] };
//   }
//   return destination;
// };

// export const getPopularDestinations = (): PopularDestinationInfo[] => {
//   return Object.values(destinationsData).map(dest => ({
//     id: dest.id,
//     name: dest.name,
//     country: dest.country,
//     image: dest.heroImage.src.replace('1200x600', '600x400'), 
//     dataAiHint: dest.heroImage.dataAiHint,
//   }));
// };
    