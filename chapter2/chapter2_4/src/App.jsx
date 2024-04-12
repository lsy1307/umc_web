import React, { useState, useEffect } from "react";
import { movies } from "./movieData";
import Explanation from "./components/explanation"; // 컴포넌트 이름 수정

function App() {
  const [movie, setMovies] = useState([]);
  const [hoveredId, sethoveredId] = useState(null);

  useEffect(() => {
    setMovies(movies.results);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        {movie.map((movie) => (
          <div
            style={{
              width: "160px",
              height: "400px",
              marginRight: "20px",
              marginBottom: "20px",
              backgroundColor: "#393939",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              paddingTop: "0px",
              color: "white",
              fontSize: "12px",
              position: "relative", // 상대적 위치 지정
            }}
            key={movie.id}
            onMouseEnter={() => sethoveredId(movie.id)}
            onMouseLeave={() => sethoveredId(null)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.original_title}
              style={{
                marginBottom: "auto",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <label>{movie.original_title}</label>
              <label>{movie.vote_average}</label>
            </div>
            {hoveredId === movie.id && (
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "160px",
                height: "380px",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}>
                <Explanation movie={movie} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;