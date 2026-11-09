export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  features: string[];
  slug: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'all' | 'transformations' | 'driveways' | 'patios' | 'lawns' | 'fencing';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  features: string[];
}

export interface Benefit {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  projectDetails: string;
}
