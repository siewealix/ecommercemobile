import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export const CategoryPill = ({ category, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: isActive ? COLORS.primary : category.accent }]}
      onPress={() => onPress?.(category.id)}
      activeOpacity={0.85}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={category.icon}
          size={20}
          color={isActive ? COLORS.cardBackground : COLORS.primary}
        />
      </View>
      <View>
        <Text style={[styles.name, { color: isActive ? COLORS.cardBackground : COLORS.textPrimary }]}>
          {category.name}
        </Text>
        <Text style={[styles.tagline, { color: isActive ? '#F7F9FF' : COLORS.textSecondary }]}>
          {category.tagline}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 16,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginRight: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFFAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  tagline: {
    marginTop: 4,
    fontSize: 13,
  },
});
