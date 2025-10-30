import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const tabs = [
  { id: 'home', label: 'Accueil', icon: 'home' },
  { id: 'favorites', label: 'Favoris', icon: 'heart' },
  { id: 'cart', label: 'Panier', icon: 'cart' },
  { id: 'profile', label: 'Profil', icon: 'person' },
];

export const BottomTabBar = ({ activeTab, onTabPress, cartCount = 0 }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const showBadge = tab.id === 'cart' && cartCount > 0;
        return (
          <Pressable
            key={tab.id}
            style={[styles.tabItem, isActive && styles.activeTab]}
            onPress={() => onTabPress(tab.id)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons
                name={`ios-${tab.icon}${isActive ? '' : '-outline'}`}
                size={22}
                color={isActive ? COLORS.primary : COLORS.textSecondary}
              />
              {showBadge ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartCount}</Text>
                </View>
              ) : null}
            </View>
            <Text style={[styles.label, { color: isActive ? COLORS.primary : COLORS.textSecondary }]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    marginHorizontal: 20,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  activeTab: {
    transform: [{ translateY: -4 }],
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -12,
    backgroundColor: COLORS.secondary,
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: COLORS.cardBackground,
    fontSize: 10,
    fontWeight: '700',
  },
});
