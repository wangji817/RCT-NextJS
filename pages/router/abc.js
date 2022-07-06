import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

//设置客户端获取数据设置props对象
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/pageData')
    const pageData = await res.json()
    return { props: pageData }
}

//设置服务端获取数据设置props对象
// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/pageData')
//     const pageData = await res.json()
//     return { props: pageData }
// }


export default function Abc({ pageData }) {
    const router = useRouter()  
    const { age } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>{`${pageData?.name}'s page`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {`${pageData?.name} age is ${age}`}
            </div>
            <div>
                {JSON.stringify(pageData)}
            </div>
        </div>
    )
}