import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>      
      <ul>
        <li>
          <Link href="/router/abc?aaa=123" >
            <a>Go to pages/router/abc.js?aaa=123</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
