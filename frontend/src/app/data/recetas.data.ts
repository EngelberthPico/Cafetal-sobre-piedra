export interface Receta {
  nombre: string;
  descripcion: string;
  rinde: string;
  ingredientes: string[];
  pasos: string[];
  imagen?: string;
}

// El campo `nombre` se conserva porque el teaser "Recetas destacadas" del Home
// (home.html) lo usa para renderizar y hacer track del @for.
export const RECETAS_DESTACADAS: Receta[] = [
  {
    nombre: 'Capuccino',
    descripcion:
      'El clásico italiano: espresso intenso, leche vaporizada y una capa cremosa de espuma. Perfecto para empezar la mañana.',
    rinde: '1 taza',
    imagen: '/capuccino.jpg',
    ingredientes: [
      '18 g de café molido Cafetal Sobre Piedra (molienda fina para espresso)',
      '120 ml de leche entera',
      'Cacao o canela en polvo para decorar (opcional)',
    ],
    pasos: [
      'Prepara un espresso doble (unos 40 ml) con el café molido bien prensado.',
      'Vaporiza la leche hasta que quede sedosa y forme una espuma firme.',
      'Vierte la leche vaporizada sobre el espresso, sosteniendo la espuma con una cuchara.',
      'Corona con la espuma restante y espolvorea cacao o canela al gusto.',
    ],
  },
  {
    nombre: 'Frappé',
    descripcion:
      'Bebida fría y espumosa, licuada con hielo. Refrescante y con todo el sabor del café de especialidad.',
    rinde: '1 vaso grande',
    imagen: '/frappe.jpg',
    ingredientes: [
      '60 ml de café concentrado frío (o un espresso doble enfriado) de Cafetal Sobre Piedra',
      '150 ml de leche',
      '1 taza de hielo',
      '2 cucharadas de azúcar o el endulzante de tu preferencia',
      'Crema batida para decorar (opcional)',
    ],
    pasos: [
      'Prepara el café y déjalo enfriar por completo.',
      'Agrega el café, la leche, el hielo y el azúcar en la licuadora.',
      'Licúa a velocidad alta hasta lograr una textura homogénea y espumosa.',
      'Sirve en un vaso alto y decora con crema batida si lo deseas.',
    ],
  },
  {
    nombre: 'Caramel Ice',
    descripcion:
      'Café frío con leche y un toque dulce de caramelo, servido sobre hielo. Suave, dulce y muy fácil de preparar.',
    rinde: '1 vaso grande',
    imagen: '/caramel-ice.jpg',
    ingredientes: [
      '60 ml de café concentrado frío (o un espresso doble enfriado) de Cafetal Sobre Piedra',
      '150 ml de leche',
      '1 taza de hielo',
      '2 cucharadas de salsa de caramelo (y un poco más para decorar)',
    ],
    pasos: [
      'Prepara el café y déjalo enfriar.',
      'Dibuja un hilo de salsa de caramelo por las paredes del vaso.',
      'Llena el vaso con hielo y vierte la leche.',
      'Agrega el café por encima, remueve suavemente y termina con más caramelo.',
    ],
  },
];
