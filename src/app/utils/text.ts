import { cut } from '@node-rs/jieba';
import { SENTENCE_TENDENCY, TENDENCY_SCORE_MAP } from '../constants/dicts';

export const isRejectionSentence = (text: string) => {
  const words = cut(text);
  const textLength = text.length;
  let cumulatedLength = 0;
  let score = 100;
  words.forEach((word) => {
    const wordScore = TENDENCY_SCORE_MAP.get(word);
    if (!wordScore) {
      return;
    }
    const punishScore = wordScore * (1 - cumulatedLength / textLength) * 10;
    score -= punishScore;
    cumulatedLength += word.length;
  });
  return score <= 90 ? SENTENCE_TENDENCY.REJECTION : SENTENCE_TENDENCY.NORMAL;
};
