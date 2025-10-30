import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export const ProductCard = ({ product, isFavorite, onToggleFavorite, onAddToCart, compact = false }) => {
  return (
    <View style={[styles.container, compact && styles.compact]}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Pressable style={styles.favoriteButton} onPress={() => onToggleFavorite?.(product.id)}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={18}
            color={isFavorite ? COLORS.secondary : COLORS.textSecondary}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.ratingContainer}>
            <Ionicons name="ios-star" size={16} color={COLORS.secondary} />
            <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            <Text style={styles.reviewText}>({product.reviews})</Text>
          </View>
          <Text style={styles.price}>€{product.price.toFixed(2)}</Text>
        </View>
        <Pressable style={styles.addButton} onPress={() => onAddToCart?.(product.id)}>
          <Ionicons name="cart" size={18} color={COLORS.cardBackground} />
          <Text style={styles.addButtonText}>Ajouter</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    overflow: 'hidden',
    width: 240,
    marginRight: 16,
  },
  compact: {
    width: 180,
  },
  imageWrapper: {
    position: 'relative',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFFD9',
    padding: 10,
    borderRadius: 16,
  },
  content: {
    padding: 16,
    gap: 8,
  },
  brand: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  reviewText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  price: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '700',
  },
  addButton: {
    marginTop: 6,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addButtonText: {
    color: COLORS.cardBackground,
    fontWeight: '700',
    fontSize: 14,
  },
});
