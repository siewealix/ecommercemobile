import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';

export const ScreenContainer = ({ children, withPadding = true }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, withPadding && styles.containerPadding]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },
  containerPadding: {
    paddingHorizontal: 20,
  },
});
