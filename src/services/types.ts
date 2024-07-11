import { AUTHOR_SYSTEM, AUTHOR_USER } from "./constants";

export interface APIResponse<T> {
  data?: T;
  error?: string;
}

export interface ProfileResponseType {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_url: string;
}

export interface ChatHistoryResponseType {
  id: string;
  created_at: string;
  title: string;
  isPinned: boolean;
}

export type Author = typeof AUTHOR_USER | typeof AUTHOR_SYSTEM;

export interface MessageType {
  id: string;
  created_at: string;
  author: Author;
  content: string;
}

export interface ChatContextResponseType {
  id: string;
  created_at: string;
  title: string;
  messages: MessageType[];
}
