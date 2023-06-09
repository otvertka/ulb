import React, { useState, useRef } from "react";

import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // импортируем компонент
  return (
    <div className="App">
      {/* передаём в компонент функцию обратного вызова, чтобы добавить в родительский массив дочерний новый элемент */}
      <PostForm create={createPost} />
      <div>
        <select>
          <option value="value1">По названию</option>
          <option value="value2">По описанию</option>
        </select>
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты по JS" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Посты не найдены !</h2>
      )}
    </div>
  );
}

export default App;
