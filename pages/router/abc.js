import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Abc() {
    const router = useRouter()
    const { aaa } = router.query
    
    return (
        <div className={styles.container}>
            <Head>
                <title>啊啊啊啊</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
            {`${JSON.stringify(aaa)}`}
            </div>
        </div>
    )
}