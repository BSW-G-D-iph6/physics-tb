'use client'
import { useRouter } from 'next/router'
import iformula, { data } from "./../db";
export default function Page() {
    const router = useRouter()

    // const datalocal = data?.formulas.find((element) => {
    //     let path = element.title.replace(/\s/g, '')
    //     if (
    //         path == router.query.slug) {
    //         return true
    //     }

    // });

    const datalocal = data?.formulas.find((element) => (element.title.replace(/\s/g, '') == router.query.slug));


    return (
        <div style={{fontFamily:'monospace',justifyContent:'center',textAlign:'center',padding:'1%'}}>
            <br />

            <h1>{datalocal?.title}</h1>
            <br/>
            <h2>Content</h2>
            <br />

            <p>{datalocal?.content}</p>
            <br />

            <h2>Tags</h2>
            <br />

            <code>| {datalocal?.tags.map((item) => `${item} | `)}</code>
            <br />
            <br />

            <h2>Detail</h2>
            <br />

            {datalocal?.detail}
        </div>
    )
}