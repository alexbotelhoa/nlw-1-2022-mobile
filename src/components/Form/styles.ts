import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    marginVertical: 16,
    flexDirection: 'row',
  },
  feedbackContainer: {
    flex: 1,
    paddingRight: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  feedbackImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  feedbackTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,    
    color: theme.colors.text_primary,
  },
  input: {
    height: 112,
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
    borderColor: theme.colors.stroke,
  },
  footer: {
    marginBottom: 16,
    flexDirection: 'row',
  }
});
