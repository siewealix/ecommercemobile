export const categories = [
  {
    id: 'cat-1',
    name: 'Sneakers',
    tagline: 'Confort quotidien',
    icon: 'ios-walk',
    accent: '#FFEEDB',
  },
  {
    id: 'cat-2',
    name: 'Accessoires',
    tagline: 'Complétez votre look',
    icon: 'ios-watch',
    accent: '#E5F5FF',
  },
  {
    id: 'cat-3',
    name: 'Sport',
    tagline: 'Performance et style',
    icon: 'ios-fitness',
    accent: '#F2ECFF',
  },
  {
    id: 'cat-4',
    name: 'Casual',
    tagline: 'Pour la ville',
    icon: 'ios-shirt',
    accent: '#E8FFF2',
  },
];

export const products = [
  {
    id: 'prod-1',
    name: 'Air Zoom Pulse',
    brand: 'Nike',
    price: 129.99,
    categoryId: 'cat-1',
    rating: 4.8,
    reviews: 421,
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 'prod-2',
    name: 'Ultraboost 21',
    brand: 'Adidas',
    price: 149.5,
    categoryId: 'cat-1',
    rating: 4.6,
    reviews: 318,
    image:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: 'prod-3',
    name: 'Everyday Backpack',
    brand: 'Peak Design',
    price: 189.0,
    categoryId: 'cat-2',
    rating: 4.9,
    reviews: 198,
    image:
      'https://images.unsplash.com/photo-1523381013998-2b7bbf520a02?auto=format&fit=crop&w=800&q=80',
    isTrending: true,
  },
  {
    id: 'prod-4',
    name: 'Trail Runner LT',
    brand: 'Allbirds',
    price: 98.9,
    categoryId: 'cat-3',
    rating: 4.4,
    reviews: 102,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-5',
    name: 'Club C 85 Vintage',
    brand: 'Reebok',
    price: 89.99,
    categoryId: 'cat-4',
    rating: 4.7,
    reviews: 291,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 'prod-6',
    name: 'Classic Leather Belt',
    brand: 'Fossil',
    price: 49.99,
    categoryId: 'cat-2',
    rating: 4.5,
    reviews: 127,
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-7',
    name: 'City Explorer Parka',
    brand: 'The North Face',
    price: 219.99,
    categoryId: 'cat-4',
    rating: 4.9,
    reviews: 88,
    image:
      'https://images.unsplash.com/photo-1542293787938-4d2226c12e72?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: 'prod-8',
    name: 'Run Fast Hat',
    brand: 'Lululemon',
    price: 29.5,
    categoryId: 'cat-3',
    rating: 4.3,
    reviews: 64,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80',
  },
];

export const curatedCollections = [
  {
    id: 'col-1',
    title: 'Nouveautés',
    description: 'Dernières sorties sélectionnées pour vous',
    productIds: ['prod-1', 'prod-3', 'prod-5'],
  },
  {
    id: 'col-2',
    title: 'Meilleures ventes',
    description: 'Les choix les plus populaires du moment',
    productIds: ['prod-2', 'prod-5', 'prod-7'],
  },
  {
    id: 'col-3',
    title: 'Recommandé pour vous',
    description: 'Produits basés sur vos dernières recherches',
    productIds: ['prod-4', 'prod-6', 'prod-8'],
  },
];

export const initialFavorites = ['prod-1', 'prod-3'];

export const initialCart = [
  {
    productId: 'prod-5',
    quantity: 1,
  },
];
