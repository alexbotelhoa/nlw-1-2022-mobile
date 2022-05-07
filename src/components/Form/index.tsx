import React, { useState } from 'react';
import { 
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';

import { Button } from '../Button';
import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';
import { theme } from '../../theme';
import { api } from '../../libs/api';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { captureScreen } from 'react-native-view-shot';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackCanceled: () => void;
}

export function Form({ feedbackType, onFeedbackSent, onFeedbackCanceled }: Props) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState<string | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error));
  }
  
  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleFeedbackSent() {
    if (isSendingFeedback) return;
    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
      })

      onFeedbackSent();
    } catch(error) {
      console.log(error)
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.feedbackContainer}>
          <Image style={styles.feedbackImage} source={feedbackTypeInfo.image} />
          <Text style={styles.feedbackTitle}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        autoCorrect={false}
        style={styles.input}
        onChangeText={setComment}
        placeholderTextColor={theme.colors.text_secondary}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
        />
        <Button
          onPress={handleFeedbackSent}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  );
}
