import React from "react";

// Props - входные данные в контексте Реакта. Можно представлять, что это аргумент функции, в кот. мы можем что-то передавать снаружи
const PostItem = (props) => {
  console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <strong> 1. Javascript </strong>
        <div>Javascript - язык программирования</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
