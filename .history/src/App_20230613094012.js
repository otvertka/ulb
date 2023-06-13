import React, { useState, useMemo, useRef } from "react";

import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "аа", body: "яя" },
    { id: 2, title: "ууу", body: "гг" },
    { id: 3, title: "юю", body: "ее" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    // console.log("ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ");
    if (selectedSort) {
      return [...posts].sort(
        (a, b) => a[selectedSort].localeCompare(b[selectedSort]) // развернём Посты в новый массив и мутируем его
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {}, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
  };
  // импортируем компонент
  return (
    <div className="App">
      {/* передаём в компонент функцию обратного вызова, чтобы добавить в родительский массив дочерний новый элемент */}
      <PostForm create={createPost} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedPosts} title="Посты по JS" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Посты не найдены !</h2>
      )}
    </div>
  );
}

export default App;
