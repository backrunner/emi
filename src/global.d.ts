import type { ChatGPTRole } from './types/openai';

interface HydratedChatMessage {
  created: number;
  id: string;
  persisted: boolean;
  isInstruction: boolean;
  role: ChatGPTRole;
  content: string;
}

interface NativeAPIs {
  createSession: () => Promise<void>;
  completeChat: (message: string) => Promise<{
    message: HydratedChatMessage;
    sessionId: string;
  }>;
  getCurrentSessionId: () => Promise<string | undefined>;
  getCurrentMessages: () => Promise<HydratedChatMessage[]>;
}

export declare global {
  interface Window {
    native: NativeAPIs | undefined;
  }
}
