import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #135d66;
  text-align: center;
  height: auto;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  padding: 150px 40px;
`;

const ContentContainer = styled.div`
  max-width: 400px;
  background-color: #77b0aa;
  padding: 10px;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.1;
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  font-size: 12px;
  display: none;
  color: #e3fef7;

  padding: 10px;

  z-index: 999;

  word-wrap: break-word;

  ${ContentContainer}:hover & {
    display: block;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieData = styled.div`
  color: e3fef7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const OverView = styled.p`
  padding-top: 30px;
`;

const MovieText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #e3fef7;
`;
const Page = styled.div`
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 120px;
`;

const PageButton = styled.button`
  height: 80%;
  width: 20%;
  font-size: 20px;
  color: white;
  background-color: transparent;
  &:disabled {
    color: gray;
  }
`;

const PageText = styled.div`
  font-size: 20px;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
`;

const MovieComponent = ({
  movieData,
  page,
  setPage,
  isButton,
  usePage,
  useScroll,
}) => {
  const navigate = useNavigate();

  return (
    <Background>
      <MovieContainer>
        {movieData.map((movie, index) => (
          <ContentContainer
            key={index}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div>
              <MovieOverview className="movie-overview">
                <h2>{movie.title}</h2>
                <OverView>{movie.overview}</OverView>
              </MovieOverview>
              <div className="movie-poster-container">
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
              <MovieData>
                <MovieText>{movie.title}</MovieText>
                <MovieText>{movie.vote_average}</MovieText>
              </MovieData>
            </div>
          </ContentContainer>
        ))}
      </MovieContainer>
      {usePage && (
        <BottomContainer>
          <Page>
            <PageButton onClick={() => setPage(page - 1)} disabled={isButton}>
              &lt;
            </PageButton>
            <PageText>{page}</PageText>
            <PageButton onClick={() => setPage(page + 1)}>&gt;</PageButton>
          </Page>
        </BottomContainer>
      )}
    </Background>
  );
};

export default MovieComponent;
