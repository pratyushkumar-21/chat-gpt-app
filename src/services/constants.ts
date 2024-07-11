import {
  ChatHistoryResponseType,
  ChatContextResponseType,
  ProfileResponseType,
} from "./types";

export const USER_DATA: ProfileResponseType = {
  id: Date.now().toString(),
  first_name: "Jhon",
  last_name: "Doe",
  profile_url: "https://picsum.photos/id/237/200/300",
  email: "test@gmail.com",
};

export const CHAT_HISTORIES: ChatHistoryResponseType[] = [
  {
    id: Date.now().toString(),
    created_at: new Date().toString(),
    title: "Sidebar Links List Wrapperres Give me 10 ways to create an res",
    isPinned: true,
  },
  {
    id: (Date.now() + 1).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res Give me 10 ways to create an res",
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
    title:
      "Give me 10 ways to create an res res Give me 10 ways to create an res",
    isPinned: false,
  },
  {
    id: (Date.now() + 7).toString(),
    created_at: new Date().toString(),
    title: "Give me 10 ways to create an res",
    isPinned: false,
  },
];

export const CHAT_CONTEXT: ChatContextResponseType = {
  id: "1",
  title: "About Sidebar",
  created_at: new Date().toString(),
  messages: [
    {
      id: Date.now().toString(),
      created_at: new Date().toString(),
      author: "user",
      content: "What is sidebar, could you explian in bit details?",
    },
    {
      id: Date.now().toString(),
      created_at: new Date().toString(),
      author: "system",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: Date.now().toString(),
      created_at: new Date().toString(),
      author: "user",
      content: "What is sidebar, explain in more details?",
    },
    // {
    //   id: Date.now().toString(),
    //   created_at: new Date().toString(),
    //   author: "system",
    //   content:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    // },
    // {
    //   id: Date.now().toString(),
    //   created_at: new Date().toString(),
    //   author: "user",
    //   content: "What is sidebar, explain in more details?",
    // },
    // {
    //   id: Date.now().toString(),
    //   created_at: new Date().toString(),
    //   author: "system",
    //   content:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    // },
  ],
};
