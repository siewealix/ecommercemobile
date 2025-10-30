import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export const CartItem = ({ product, quantity, onIncrease, onDecrease, onRemove }) => {
  const total = product.price * quantity;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.quantityRow}>
          <View style={styles.stepper}>
            <Pressable style={styles.stepButton} onPress={onDecrease}>
              <Ionicons name="remove" size={18} color={COLORS.textPrimary} />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable style={styles.stepButton} onPress={onIncrease}>
              <Ionicons name="add" size={18} color={COLORS.textPrimary} />
            </Pressable>
          </View>
          <Text style={styles.price}>€{total.toFixed(2)}</Text>
        </View>
      </View>
      <Pressable style={styles.removeButton} onPress={onRemove}>
        <Ionicons name="trash" size={18} color={COLORS.textSecondary} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    padding: 14,
    borderRadius: 18,
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    gap: 6,
  },
  brand: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F1F4FB',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  stepButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },
  removeButton: {
    padding: 6,
  },
});
