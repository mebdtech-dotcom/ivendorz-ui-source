/**
 * Shared TypeScript interfaces for vendor profile sections.
 * All data is passed as props — no fetching or business logic.
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  detailsLink?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientIndustry: string;
  image: {
    url: string;
    alt: string;
  };
  link?: string;
}

export interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  issuedDate?: string;
  expiryDate?: string;
  logo?: {
    url: string;
    alt: string;
  };
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category?: string;
}

export interface Review {
  id: string;
  rating: number;
  buyerCompany: string;
  reviewText: string;
  date: string;
  buyerImage?: {
    url: string;
    alt: string;
  };
}

export interface SimilarVendor {
  id: string;
  slug: string;
  name: string;
  logo: {
    url: string;
    alt: string;
  };
  rating: number;
  businessType: string;
  location: string;
  isVerified: boolean;
}

export interface VendorProfile {
  id: string;
  slug: string;
  name: string;
  logo: {
    url: string;
    alt: string;
  };
  rating: number;
  yearsInBusiness: number;
  location: string;
  businessType: string;
  responseRate: string;
  responseTime: string;
  isVerified: boolean;
  isPremium: boolean;
  
  // Hero / overview
  aboutText: string;
  vision: string;
  strengths: string[];
  
  // Contact
  contactPersonName: string;
  phone: string;
  email: string;
  website?: string;
  whatsapp?: string;
  businessHours?: string;
  
  // Company info
  companyName: string;
  yearEstablished: number;
  employees: string;
  factorySize: string;
  vat?: string;
  bin?: string;
  tin?: string;
  tradeLicense?: string;
  
  // Content sections
  industriesServed: string[];
  products: Product[];
  projects: Project[];
  services: Service[];
  certifications: Certification[];
  gallery: GalleryImage[];
  reviews: Review[];
  similarVendors: SimilarVendor[];
  
  // Pagination cursors
  reviewsNextCursor?: string;
  reviewsPrevCursor?: string;
}
