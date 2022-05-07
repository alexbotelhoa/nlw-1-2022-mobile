import React from 'react';
import { Text, View } from 'react-native';

import { Option } from '../Option';
import { Copyright } from '../Copyright';
import { FeedbackType } from '../Widget';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  onFeedbackTypeChange: (feedbackTypes: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option
                key={key}
                title={value.title}
                image={value.image} 
                onPress={() => onFeedbackTypeChange(key as FeedbackType)} />
            ))
        }
      </View>
      <Copyright />
    </View>
  );
}
