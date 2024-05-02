import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-color: #135d66;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  padding: 150px 40px;
`;

const ContentContainer = styled.div`
  background-color: #77b0aa;
  padding: 10px;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.1;
  }
`;

const MovieOverview = styled.div`
  position: absolute;

  display: none;
  color: #e3fef7;

  padding: 10px;

  z-index: 0;

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
  font-weight: bold;
  color: #e3fef7;
`;

const MovieComponent = ({ movieData }) => {
  return (
    <Background>
      <MovieContainer>
        {movieData.map((movie, index) => (
          <ContentContainer key={index}>
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
    </Background>
  );
};

export default MovieComponent;
