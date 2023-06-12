import React from "react";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    // вызываем функцию, куда передаём новый массив Постов, куда разворачиваем старый массив с уже существующими постами и добавляем в конец новый пост
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPosts({ title: "", body: "" });
  };
  return (
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
  );
};

export default PostForm;
