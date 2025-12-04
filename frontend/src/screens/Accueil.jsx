import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../styles/accueil';

export const Accueil = ({ navigation }) => {
  return (
    <View style={styles.page}>
      {/* Menu juste sous le header */}
      <View style={styles.menuContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
          style={styles.menuWrapper}
        >
          <Pressable style={styles.button} onPress={() => navigation.navigate('Cataloguemongodb')}>
            <Text style={styles.buttonText}>Catalogue</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Inscription')}>
            <Text style={styles.buttonText}>Inscription</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Connexion')}>
            <Text style={styles.buttonText}>Connexion</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Profil')}>
            <Text style={styles.buttonText}>Profil</Text>
          </Pressable>
        </ScrollView>
      </View>

  <View style={styles.conteneur}>
  <View style={styles.content}>
    <Text style={styles.titre}>Votre boutique, toujours à portée de main 🛒</Text>
    <Text style={styles.sousTitre}>
      Découvrez nos produits, ajoutez-les à votre panier et retrouvez-les à tout moment.
    </Text>
    <Text style={styles.sousTitre}>
      Nouveau ici ? Inscrivez-vous en quelques secondes. Déjà membre ? Connectez-vous pour accéder à votre profil.
    </Text>
  </View>
</View>

    </View>
  );
};


