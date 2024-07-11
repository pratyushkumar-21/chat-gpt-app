export const sortByDate = <T extends { created_at: string }>(
  data: T[],
  sort = "desc"
) => {
  const results: T[] = data.sort((a, b) => {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);

    if (sort === "asc") return date1 > date2 ? 1 : date1 < date2 ? -1 : 0;
    return date2 > date1 ? 1 : date2 < date1 ? -1 : 0;
  });

  return results;
};

export const getTruncatedChatTitle = (
  chat: string,
  slicedLength = 35
): string =>
  chat.length > slicedLength ? `${chat.slice(0, slicedLength)}...` : chat;

export const getFullname = (firstName: string, lastName?: string) =>
  `${firstName} ${lastName ? lastName : ""}`;

export const getTime = (dateString: string) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
};

export const getDateStatus = (dateString: string) => {
  const date = new Date(dateString);
  const defaultValue = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${getTime(dateString)}`;

  date.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.getTime() === today.getTime()) return `Today ${getTime(dateString)}`;

  if (date.getTime() === yesterday.getTime())
    return `Yesterday ${getTime(dateString)}`;

  return defaultValue;
};

export function debounce(cb: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
