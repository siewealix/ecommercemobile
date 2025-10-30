import { useMemo, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { TopBar } from '../components/TopBar';
import { SearchBar } from '../components/SearchBar';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryPill } from '../components/CategoryPill';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { CollectionCard } from '../components/CollectionCard';
import { COLORS } from '../constants/colors';
import { categories, products, curatedCollections } from '../data/products';

export const HomeScreen = ({ favorites, onToggleFavorite, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('cat-1');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory ? product.categoryId === activeCategory : true;
      const matchesSearch = searchTerm
        ? `${product.name} ${product.brand}`.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredProducts = useMemo(() => products.filter((product) => product.isFeatured), []);
  const trendingProducts = useMemo(() => products.filter((product) => product.isTrending), []);

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <TopBar />
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
        <HeroBanner />

        <SectionHeader
          title="Catégories"
          subtitle="Parcourez nos sélections"
          onPress={() => setActiveCategory(null)}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onPress={(id) => setActiveCategory((prev) => (prev === id ? null : id))}
            />
          ))}
        </ScrollView>

        <SectionHeader
          title="Sélection du moment"
          subtitle="Des pièces choisies par notre équipe"
        />
        <FlatList
          data={featuredProducts}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
            />
          )}
          contentContainerStyle={styles.horizontalList}
        />

        <SectionHeader
          title="Collections"
          subtitle="Des univers pensés pour vous"
        />
        <FlatList
          data={curatedCollections}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const previewProduct = products.find((product) => product.id === item.productIds[0]);
            return (
              <CollectionCard
                collection={item}
                previewImage={previewProduct?.image ?? products[0].image}
              />
            );
          }}
          contentContainerStyle={styles.horizontalList}
        />

        <SectionHeader
          title={activeCategory ? 'Recommandations personnalisées' : 'Tous les produits'}
          subtitle={activeCategory ? 'Inspiré par vos préférences' : 'Explorez notre catalogue'}
        />
        <View style={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              compact
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
            />
          ))}
          {filteredProducts.length === 0 ? (
            <Text style={styles.emptySearch}>
              Aucun résultat pour « {searchTerm} ». Essayez une autre recherche.
            </Text>
          ) : null}
        </View>

        <SectionHeader title="Tendances" subtitle="Ce que la communauté adore" />
        <FlatList
          data={trendingProducts}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
            />
          )}
          contentContainerStyle={[styles.horizontalList, styles.bottomSpacing]}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 120,
  },
  categoryList: {
    marginBottom: 24,
  },
  horizontalList: {
    paddingLeft: 4,
    paddingRight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 20,
  },
  emptySearch: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    flex: 1,
    width: '100%',
  },
  bottomSpacing: {
    paddingBottom: 40,
  },
});
