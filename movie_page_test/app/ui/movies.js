import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Search from "@/app/ui/search"
import Pagination from "@/app/ui/pagination";


export default async function Movies({search, currentPage}) {
    const data = await getMovies(search, currentPage);

    return (
        <div>
            <div className={styles.description}>
                <h2>
                    Sweet Movies MX is a website where you can
                    read information about the most popular movies 
                    of the last few years.
                </h2>
                <div>
                    <div>
                        <span>{data.movies.total_results} resultados</span>
                        &nbsp;&nbsp;
                        <select>
                            <option value="">Sort: Most popular first</option>
                        </select>
                    </div>
                    <Search/>
                </div>
            </div> 
            <div className={styles.center}>
                {data.movies.results.map((result) => (
                    <Link
                    href={`/movie/${result.id}`} 
                    key={result.id}
                    className={styles.movie_card}
                    >
                        <Image
                        src={`https://image.tmdb.org/t/p/original${
                        result.backdrop_path || result.poster_path
                        }`}
                        width={350}
                        height={200}
                        alt={result.title}
                        />
                        <h3>{result.title}</h3>
                        <span>{result.overview}</span>
                        <div>
                            <span>{result.release_date}</span>
                            <span>{result.popularity}&nbsp;<b>&#9829;</b></span>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination movieData={data.movies}/>
        </div>
    )
}


async function getMovies(search, currentPage) {
    console.log('Search desde el function:', search);
    console.log('currentPage desde el function:', currentPage);

    let url = 'http://backend:8000';
    if (currentPage) { 
        console.log('si hay currentPage en el function')
        url += `/${currentPage}` 
    }
    if (search && search !== '') {
        console.log('si hay search en el function')
        url += `/search/${search}` 
    }
    
    console.log('FINAL URL:', url);

    const response = await fetch(url, {
        cache: 'no-store'
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return response.json();
}