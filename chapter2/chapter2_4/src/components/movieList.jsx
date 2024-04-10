import React from "react";

function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // 여러 줄로 나누어 정렬하기 위해 flexWrap 속성을 추가합니다.
      }}
    >
      {movies.map((movie) => (
        <div
          style={{
            width: "200px",
            height: "400px",
            marginRight: "20px",
            marginBottom: "20px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.original_title}
            style={{
              marginBottom: "auto", // 이미지와 제목 사이의 간격을 최대로 하여 'space-between' 효과를 낼 수 있습니다.
            }}
          />
          <div
            style={{
              display: "flex", // 이 요소에 'display: "flex"'를 추가합니다.
              flexDirection: "column", // 세로 방향으로 요소를 정렬합니다.
              alignItems: "center", // 가운데 정렬합니다.
              width: "100%", // 부모 요소의 전체 너비를 차지하도록 설정합니다.
            }}
          >
            <label>{movie.original_title}</label>
            <label>{movie.vote_average}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
