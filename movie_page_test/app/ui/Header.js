import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <nav className={styles.header}>
            SWEET&nbsp;MOVIES&nbsp;MX
            <Link href={'/'}>Home</Link>
        </nav>
    )
}