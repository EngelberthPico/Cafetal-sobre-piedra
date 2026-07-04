import { Product } from '../interfaces/product.interface';

export const VINO_CAFE: Product[] = [
    {
    nombre: 'Vino de café (750ml)',
    precio: 70000,
    cantidad: 750,
    unidad: 'ml',
    disponible: true,
    descripcion: 'Nuestra presentación grande de vino de café, ideal para compartir en una velada especial o para tener en casa. Elaborado artesanalmente con café de nuestra finca en San Vicente de Chucurí'
  },

  {
    nombre: 'Vino de café (375ml)',
    precio: 40000,
    cantidad: 375,
    unidad: 'ml',
    disponible: true,
    descripcion: 'Presentación mediana de vino de café, perfecta para regalar o para disfrutar en pareja. El mismo sabor artesanal de nuestra finca, en un formato más compacto.'
  },

  {
    nombre: 'Vino de café (180ml)',
    precio: 20000,
    cantidad: 180,
    unidad: 'ml',
    disponible: true,
    descripcion: 'Presentación individual de vino de café, ideal para probar por primera vez o para un detalle personal. Toda la esencia de nuestra finca en una porción perfecta para disfrutar.'
  },
];

export const ACCESORIOS: Product[] = [
    
  {
    nombre: 'Cuchara/pinza medidora (para 10 gramos de café)',
    precio: 16000,
    cantidad: 1,
    color: 'oro rosa',
    unidad: 'unidad',
    disponible: true,
    descripcion: 'Cuchara medidora en acabado oro rosa, diseñada para dosificar exactamente 10 gramos de café en cada preparación. Un toque elegante para tu ritual de café.'
  },

  {
    nombre: 'Cuchara/pinza medidora (para 10 gramos de café)',
    precio: 16000,
    cantidad: 1,
    color: 'dorado',
    unidad: 'unidad',
    disponible: true,
    descripcion: 'Cuchara medidora en acabado dorado, diseñada para dosificar exactamente 10 gramos de café en cada preparación. El complemento perfecto para tu ritual de café.'
  },
];