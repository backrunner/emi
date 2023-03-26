import Store from 'electron-store';

export const secureStore = new Store({
  defaults: {
    openai_api_key: process.env.OPENAI_API_KEY,
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

export const userConfigStore = new Store({
  defaults: {
    user_nickname: '主人',
    payload_on_disk: false,
  },
  schema: {
    user_nickname: {
      type: 'string',
    },
    payload_on_disk: {
      type: 'boolean',
    },
  },
});
