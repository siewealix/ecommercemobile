import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { EmptyState } from '../components/EmptyState';
import { products } from '../data/products';

export const FavoritesScreen = ({ favorites, onToggleFavorite, onAddToCart }) => {
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Vos favoris</Text>
        <Text style={styles.subtitle}>
          {favoriteProducts.length} produit{favoriteProducts.length > 1 ? 's' : ''} sauvegardé{favoriteProducts.length > 1 ? 's' : ''}
        </Text>
      </View>

      {favoriteProducts.length === 0 ? (
        <EmptyState
          icon="ios-heart-outline"
          title="Pas encore de favoris"
          description="Ajoutez vos coups de cœur pour les retrouver rapidement ici."
        />
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <ProductCard
                product={item}
                isFavorite
                onToggleFavorite={onToggleFavorite}
                onAddToCart={onAddToCart}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={() => (
            <SectionHeader
              title="Sélectionnée pour vous"
              subtitle="Des pièces à ne pas manquer"
            />
          )}
        />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 12,
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: '#6B7C93',
  },
  listContent: {
    paddingBottom: 120,
  },
  cardWrapper: {
    marginBottom: 16,
  },
});
