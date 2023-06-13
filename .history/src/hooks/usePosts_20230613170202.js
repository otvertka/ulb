export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort(
        (a, b) => a[sort].localeCompare(b[sort]) // развернём Посты в новый массив и мутируем его
      );
    }
    return posts;
  }, [sort, posts]);
};
