import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { CartScreen } from './src/screens/CartScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { BottomTabBar } from './src/components/BottomTabBar';
import { COLORS } from './src/constants/colors';
import { initialCart, initialFavorites } from './src/data/products';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [favorites, setFavorites] = useState(initialFavorites);
  const [cart, setCart] = useState(initialCart);

  const handleToggleFavorite = useCallback((productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }, []);

  const handleAddToCart = useCallback((productId) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
  }, []);

  const handleIncrease = useCallback((productId) => {
    setCart((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const handleDecrease = useCallback((productId) => {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const handleRemove = useCallback((productId) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const screen = useMemo(() => {
    switch (activeTab) {
      case 'favorites':
        return (
          <FavoritesScreen
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        );
      case 'cart':
        return (
          <CartScreen
            cartItems={cart}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        );
      case 'profile':
        return <ProfileScreen />;
      case 'home':
      default:
        return (
          <HomeScreen
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        );
    }
  }, [activeTab, favorites, cart, handleAddToCart, handleDecrease, handleIncrease, handleRemove, handleToggleFavorite]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {screen}
      <BottomTabBar
        activeTab={activeTab}
        onTabPress={setActiveTab}
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
