import { cut, extract } from '@node-rs/jieba';
import { IGNORED_KEYWORD_MAP, SENTENCE_TENDENCY, TENDENCY_SCORE_MAP } from '../constants/dicts';

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
    const punishScore = wordScore * (1 - cumulatedLength / textLength) * 100;
    score -= punishScore;
    cumulatedLength += word.length;
  });
  const type = score <= 90 ? SENTENCE_TENDENCY.REJECTION : SENTENCE_TENDENCY.NORMAL;
  return {
    type,
    score,
    text,
  };
};

// Compute the overlap score between reference and an array of content
export const computeKeywordOverlapScore = (reference: string, contents: string[], topN = 10) => {
  const referenceKeywords = extract(reference, topN).map((item) => item.keyword);
  const extractedContents = contents.map((content) => {
    return {
      content,
      keywords: extract(content, topN).map((item) => item.keyword),
    };
  });
  const referenceKeywordMap = new Map<string, boolean>(referenceKeywords.map((keyword) => [keyword, true]));
  const scoredContents: [string, number][] = [];
  extractedContents.forEach((extractedContent) => {
    let score = 0;
    extractedContent.keywords.forEach((keyword) => {
      if (referenceKeywordMap.has(keyword) && !IGNORED_KEYWORD_MAP.has(keyword)) {
        score += 1;
      }
    });
    scoredContents.push([extractedContent.content, score]);
  });
  return scoredContents.sort((a, b) => b[1] - a[1]);
};
