import Image from "next/image";
import { filmOnline } from "../utils/fimAvailable";
import ReactPlayer from 'react-player/lazy';

function Detail({ result }) {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const online = filmOnline.find((film) => film.name === result.title )
  console.log(online)
  return (
    <div>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <Image
              className="locandina"
              layout="responsive"
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              height={1080}
              width={1920}
            />
            <h1>{result.title}</h1>
            <h4>{result.release_date}</h4>
            <span className="minutes">{result.runtime} min</span>
            <p className="type">{result.genres.map(genere =>(
              genere.name+ " "
            ))}</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              {result.overview}
            </p>
          </div>
        </div>
        <div
          className="blur_back"
          style={{
            
            backgroundImage: `url(${
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
            })`,
          }}
        ></div>
      </div>
      <div className="movie_card">
      {online != undefined && <ReactPlayer url={online.url} />}
      </div>
    </div>
    
  );
}

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const id = context.query.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      result: request,
    },
  };
}

export default Detail;
