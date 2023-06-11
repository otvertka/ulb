import React, { useState, useRef } from "react";

import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    // вызываем функцию, куда передаём новый массив Постов, куда разворачиваем старый массив с уже существующими постами и добавляем в конец новый пост
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPosts({ title: "", body: "" });
  };
  // импортируем компонент
  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        ></MyInput>
        {/* Неуправляемый\ Неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        ></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты по JS" />
    </div>
  );
}

export default App;
