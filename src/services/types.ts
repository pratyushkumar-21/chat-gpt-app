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
