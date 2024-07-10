import { ChatHistoryResponseType } from "./types";
export const CHAT_HISTORIES: ChatHistoryResponseType[] = [
  {
    id: Date.now().toString(),
    created_at: new Date().toString(),
    title: "Sidebar Links List Wrapper",
    isPinned: true,
  },
  {
    id: (Date.now() + 1).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: true,
  },
  {
    id: (Date.now() + 2).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: false,
  },
  {
    id: (Date.now() + 3).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: false,
  },
  {
    id: (Date.now() + 4).toString(),
    created_at: new Date().toString(),
    title: "Sidebar Links List Wrapper",
    isPinned: true,
  },
  {
    id: (Date.now() + 5).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: true,
  },
  {
    id: (Date.now() + 6).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: false,
  },
  {
    id: (Date.now() + 7).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: false,
  },
];
