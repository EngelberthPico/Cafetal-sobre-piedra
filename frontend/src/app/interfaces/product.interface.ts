export interface Product {
  _id?: string;
  nombre: string;
  precio: number;
  categoria: 'cafe' | 'vino' | 'cuchara';
  cantidad?: number;
  unidad?: 'g' | 'ml' | 'unidad';
  tipo?: 'molido' | 'grano';
  color?: 'dorado' | 'oro rosa';
  disponible: boolean;
  descripcion?: string;
  imagen?: string;
}