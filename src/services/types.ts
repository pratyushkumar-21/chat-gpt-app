export interface APIResponse<T> {
  data?: T;
  error?: string;
}

export interface ChatHistoryResponseType {
  id: string;
  created_at: string;
  title: string;
  isPinned: boolean;
}

export type Author = "user" | "system";

export interface MessageType {
  id: string;
  created_at: string;
  author: Author;
  context: string;
}

export interface ChatContextResponseType {
  id: string;
  created_at: string;
  title: string;
  messages: MessageType[];
}
