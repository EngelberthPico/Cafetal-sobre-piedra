import { Product } from './product.interface';

export interface CartItem {
  producto: Product;
  cantidad: number;
}