import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export const HeroBanner = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
      }}
      style={styles.banner}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.caption}>Collection printemps</Text>
        <Text style={styles.title}>Style minimal. Confort maximal.</Text>
        <Text style={styles.cta}>Découvrir</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 180,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    borderRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    gap: 10,
  },
  caption: {
    color: '#E2F1FF',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    color: COLORS.cardBackground,
    fontSize: 22,
    fontWeight: '700',
  },
  cta: {
    color: COLORS.cardBackground,
    fontWeight: '600',
    fontSize: 15,
  },
});
