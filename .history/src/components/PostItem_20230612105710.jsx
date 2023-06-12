import React from "react";
import MyButton from "./UI/button/MyButton";

// Props - входные данные в контексте Реакта. Можно представлять, что это аргумент функции, в кот. мы можем что-то передавать снаружи
const PostItem = (props) => {
  // console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
