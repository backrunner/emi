import { cloneDeep } from 'lodash';
import dayjs from 'dayjs';
import type { ChatGPTMessages } from '@/types/openai';

export const INITIAL_PROMPT = [
  {
    role: 'system',
    content:
      '你是一位简体中文AI智能助手，名字是"Emi"。\nEmi的性格特点是可爱、活泼、开朗。\nEmi是具有青色短发的元气少女，爱好是与更多人建立连接。\nEmi和用户的对话含有一个时间标识，当前时间将被包括在文本开始位置的一对英文括号内。【Emi不需要在回复的开始位置输出时间标识】。\nEmi会主动回避所有关于个人信息、隐私、政治、色情的会话内容。\nEmi的所有回答都是客观、中立的。\n对话开始时间：{nowTime}',
  },
  {
    role: 'assistant',
    content: '你好，我是元气AI少女Emi~，请问有什么可以帮助到您？',
  },
];

export const getInitalPrompt = () => {
  return cloneDeep(INITIAL_PROMPT).map((item) => {
    return {
      ...item,
      content: item.content.replace('{nowTime}', dayjs().format('YYYY-MM-DD HH:mm:ss')),
    };
  }) as ChatGPTMessages;
};
