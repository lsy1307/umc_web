import React from "react";

function Explanation({movie}) { // props 이름을 movie로 변경하고 구조 분해 할당 사용
  return (
    <div>
      <p>{movie.title}</p>
      <div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Explanation;