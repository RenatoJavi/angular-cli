import { Commnet } from './comment';

export interface DishParametros {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  featured: boolean;
  description: string;
  comments: Commnet[];
}
