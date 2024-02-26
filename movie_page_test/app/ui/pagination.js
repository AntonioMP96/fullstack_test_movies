'use client';
import styles from '@/app/page.module.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Pagination(moviesData) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    function prevPage(page, params) {
        console.log('prev page', params, params.get('page'), params.get('search'));
        if (page > 1) {
            const prevPage = page - 1;
            params.set('page', prevPage.toString());
            const newUrl = `?page=${prevPage}${params.get('search') ? '&search=' + params.get('search'): ''}`
            window.location.href = newUrl;
        }
    }
    
    function nextPage(page, params, lastPage) {
        console.log('next page', params, params.get('page'), params.get('search'));
        if (page < lastPage) {
            const nextPage = page + 1;
            params.set('page', nextPage.toString());
            const newUrl = `?page=${nextPage}${params.get('search') ? '&search=' + params.get('search'): ''}`
            window.location.href = newUrl;
        }
    }

    return (
        <div className={styles.pag_cont}>
            <button 
            type="button" 
            disabled={moviesData.movieData.page === 1}
            onClick={(e) => {prevPage(moviesData.movieData.page, params)}}
            >Prev</button>
            <span>{moviesData.movieData.page} of {moviesData.movieData.total_pages}</span>
            <button 
            type="button" 
            disabled={moviesData.movieData.page === moviesData.movieData.total_pages}
            onClick={(e) => {nextPage(moviesData.movieData.page, params, moviesData.movieData.total_pages)}}
            >Next</button>
        </div>
    )
}



