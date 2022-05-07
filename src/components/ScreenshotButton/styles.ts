import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 4,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface_secondary,
  },
  image: {
    width: 40,
    height: 40,
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});