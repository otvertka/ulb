export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort(
        (a, b) => a[filter.sort].localeCompare(b[filter.sort]) // развернём Посты в новый массив и мутируем его
      );
    }
    return posts;
  }, [filter.sort, posts]);
};
