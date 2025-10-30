import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.caption}>Bonjour Alex 👋</Text>
        <Text style={styles.title}>Découvrons votre prochaine tenue</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          }}
          style={styles.avatar}
        />
        <View style={styles.notificationBubble}>
          <Ionicons name="ios-notifications" size={18} color={COLORS.cardBackground} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  caption: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
    maxWidth: '80%',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 24,
  },
  notificationBubble: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 6,
  },
});
