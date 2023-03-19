export const TENDENCY_SCORE_DICT = [
  { score: 0.1, word: '抱歉' },
  { score: 0.2, word: '很遗憾' },
  { score: 0.3, word: '恐怕不行' },
  { score: 0.4, word: '不行' },
  { score: 0.4, word: '不被允许' },
  { score: 0.5, word: '不好意思' },
  { score: 0.6, word: '不可以' },
  { score: 0.6, word: '不能' },
  { score: 0.7, word: '没有办法' },
  { score: 0.8, word: '不太可能' },
  { score: 0.9, word: '绝对不' },
  { score: 1.0, word: '肯定不' },
  { score: 1.1, word: '没门' },
  { score: 1.2, word: '不可能' },
  { score: 1.3, word: '决不' },
  { score: 1.4, word: '不可能的事情' },
  { score: 1.5, word: '不用想了' },
  { score: 1.6, word: '算了吧' },
  { score: 1.7, word: '不要做梦了' },
  { score: 1.8, word: '一定不行' },
  { score: 1.9, word: '死了这条心吧' },
  { score: 2.0, word: '没门儿' },
];

export const TENDENCY_SCORE_MAP = (() => {
  const map = new Map<string, number>();
  TENDENCY_SCORE_DICT.forEach((item) => {
    map.set(item.word, item.score);
  });
  return map;
})();

export enum SENTENCE_TENDENCY {
  NORMAL = 'normal',
  REJECTION = 'rejection',
}
