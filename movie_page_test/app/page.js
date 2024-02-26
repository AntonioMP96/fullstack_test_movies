import styles from "./page.module.css";
import Movies from "@/app/ui/movies";


export default async function Page(searchParams) {
  
  const search = searchParams.searchParams?.search || '';
  const currentPage = Number(searchParams.searchParams?.page) || 1;

  return (
    <main className={styles.main}>
      <Movies search={search} currentPage={currentPage}/>
    </main>
  );
}