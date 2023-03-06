import Store from 'electron-store';

export const secureStore = new Store({
  defaults: {
    openai_api_key: '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',
  },
  schema: {
    openai_api_key: {
      type: 'string',
    },
  },
  fileExtension: 'emi',
  name: 'secure',
  // TODO: safe serialize and deserialize
});
