import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/colors';

export const CollectionCard = ({ collection, previewImage, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress?.(collection.id)}>
      <ImageBackground
        source={{ uri: previewImage }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <Text style={styles.title}>{collection.title}</Text>
        <Text style={styles.description}>{collection.description}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginRight: 16,
  },
  image: {
    height: 160,
    padding: 20,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 20,
  },
  title: {
    color: COLORS.cardBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    marginTop: 4,
    color: '#F5F9FF',
    fontSize: 13,
  },
});
