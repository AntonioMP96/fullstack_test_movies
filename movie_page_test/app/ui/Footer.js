import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href={'/'}>Home</Link>
                <span>Credits: José Antonio Martínez Pérez</span>
                <span>Contact Phone: +52 5510533016</span>
                <span>Contact mail: jantoniomgfis@yahoo.com</span>
            </div>
        </footer>
    )
}