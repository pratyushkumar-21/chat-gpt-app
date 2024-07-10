export const sortByDate = <T extends { created_at: string }>(data: T[]) => {
  const results: T[] = data.sort((a, b) => {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);
    return date2 > date1 ? 1 : date2 < date1 ? -1 : 0;
  });

  return results;
};
