export interface Product {
  _id?: string;
  nombre: string;
  precio: number;
  cantidad?: number;
  unidad?: 'g' | 'ml' | 'unidad';
  tipo?: 'molido' | 'grano';
  color?: 'dorado' | 'oro rosa';
  disponible: boolean;
  descripcion?: string;
}