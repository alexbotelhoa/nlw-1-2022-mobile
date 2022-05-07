import React from 'react';
import { Trash, Camera } from 'phosphor-react-native';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container} 
      onPress={screenshot ? onRemoveShot : onTakeShot}>
        {
          screenshot ?
          <View>
            <Image
              style={styles.image}
              source={{ uri: screenshot }}
            />

            <Trash
              style={styles.removeIcon}
              size={22}
              weight="fill"
              color={theme.colors.text_secondary}
            />
          </View> :
          <Camera
            size={24}
            weight="bold"
            color={theme.colors.text_primary}
          />
        }
    </TouchableOpacity>
  );
}