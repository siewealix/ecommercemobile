import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { CartItem } from '../components/CartItem';
import { EmptyState } from '../components/EmptyState';
import { COLORS } from '../constants/colors';
import { products } from '../data/products';

const SHIPPING_COST = 6.9;

export const CartScreen = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const itemsWithProduct = cartItems
    .map((item) => {
      const product = products.find((productItem) => productItem.id === item.productId);
      if (!product) {
        return null;
      }
      return { ...item, product };
    })
    .filter(Boolean);

  const subtotal = itemsWithProduct.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0,
  );
  const total = itemsWithProduct.length === 0 ? 0 : subtotal + SHIPPING_COST;

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Votre panier</Text>
        <Text style={styles.subtitle}>
          {itemsWithProduct.length} article{itemsWithProduct.length > 1 ? 's' : ''}
        </Text>
      </View>

      {itemsWithProduct.length === 0 ? (
        <EmptyState
          icon="ios-basket-outline"
          title="Votre panier est vide"
          description="Ajoutez des produits à partir de la page d'accueil pour commencer vos achats."
        />
      ) : (
        <>
          <FlatList
            data={itemsWithProduct}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <CartItem
                product={item.product}
                quantity={item.quantity}
                onIncrease={() => onIncrease(item.productId)}
                onDecrease={() => onDecrease(item.productId)}
                onRemove={() => onRemove(item.productId)}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Sous-total</Text>
              <Text style={styles.summaryValue}>€{subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Livraison</Text>
              <Text style={styles.summaryValue}>€{SHIPPING_COST.toFixed(2)}</Text>
            </View>
            <View style={[styles.summaryRow, styles.summaryTotalRow]}>
              <Text style={styles.summaryTotalLabel}>Total</Text>
              <Text style={styles.summaryTotalValue}>€{total.toFixed(2)}</Text>
            </View>
            <Pressable style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Passer la commande</Text>
            </Pressable>
          </View>
        </>
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
    color: COLORS.textSecondary,
  },
  listContent: {
    paddingBottom: 160,
  },
  summaryCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 20,
    gap: 14,
    marginBottom: 120,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  summaryValue: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  summaryTotalRow: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    marginTop: 6,
  },
  summaryTotalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  summaryTotalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  checkoutText: {
    color: COLORS.cardBackground,
    fontSize: 16,
    fontWeight: '700',
  },
});
