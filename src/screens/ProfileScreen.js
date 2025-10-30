import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components/ScreenContainer';
import { COLORS } from '../constants/colors';

const options = [
  { id: 'orders', label: 'Mes commandes', icon: 'receipt-outline', accent: '#E5F5FF' },
  { id: 'addresses', label: 'Adresses de livraison', icon: 'home-outline', accent: '#F2ECFF' },
  { id: 'payments', label: 'Modes de paiement', icon: 'card-outline', accent: '#FFEEDB' },
  { id: 'support', label: 'Support & FAQ', icon: 'help-circle-outline', accent: '#E8FFF2' },
  { id: 'logout', label: 'Déconnexion', icon: 'log-out-outline', accent: '#FFE6E6' },
];

export const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Bonjour Alex</Text>
        <Text style={styles.subtitle}>Gérez vos informations personnelles et vos commandes</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Commandes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Favoris</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>€254</Text>
          <Text style={styles.statLabel}>Economisés</Text>
        </View>
      </View>

      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.option, { backgroundColor: item.accent }]}
            onPress={() => {}}
          >
            <View style={styles.optionIcon}>
              <Ionicons name={item.icon} size={22} color={COLORS.primary} />
            </View>
            <Text style={styles.optionLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textSecondary} />
          </Pressable>
        )}
        contentContainerStyle={styles.optionList}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    gap: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  optionList: {
    paddingBottom: 160,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },
  optionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
});
