import styles from '@/app/page.module.css'
import Image from 'next/image'

export default async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);

    return (
    <div className={styles.main}>
        <div className={styles.movie_data}>    
            <h1>{movie.details.title}</h1>
            <div>
                <span>Release date:&nbsp;{movie.details.release_date}</span>
                <span>Popularity:&nbsp;{movie.details.popularity}&nbsp;<b>&#9829;</b></span>
            </div>
            <Image
                src={`https://image.tmdb.org/t/p/original${
                movie.details.backdrop_path || movie.details.poster_path
                }`}
                width={500}
                height={300}
                alt={movie.details.title}
                priority='high'
            />
            <h2>Overview:</h2>
            <span>{movie.details.overview}</span>
            <div>    
                <span>Runtime: {movie.details.runtime} minutes</span>
                <span>Average Rating: {movie.details.vote_average}/ 10</span>
            </div>
            <div className={styles.genres_cont}>
                <h3>Genres:</h3>
                <ul>
                    {movie.details.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li> 
                    ))}
                </ul>
            </div>
        </div>
    </div>
  ); 
}


async function getMovie(movieId) {
    const response = await fetch(`http://backend:8000/movie/${movieId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch movie data");
    }
    
    return response.json()
}