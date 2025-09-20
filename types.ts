
export interface PortfolioItem {
  id: number;
  title: string;
  artist: string;
  role: string;
  year: number;
  imageUrl: string;
  audioSrc: string;
}

export interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  price?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string;
}
