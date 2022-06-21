import HomeLayout from "Layouts/HomeLayout"
import Link from "next/link"

function News({ data, name }) {

    return <>
        <HomeLayout>
            <h1 className='text-3xl'>{data}</h1>
            <h2 className="text-xl mb-10">{name}</h2>
            <Link href={'/api/disable-preview'} >
                <a className='mt-5 p-3 bg-red-500 text-white rounded-lg'>
                    Disable Priview
                </a>
            </Link>
        </HomeLayout>
    </>
}

export default News

export async function getStaticProps(context) {
    console.log('Running getStaticProps', context.previewData)
    const name = process.env.NAME
    console.log(name)
    return {
        props: {
            data: context.preview
                ? 'Preview Mode Is On'
                : 'Preview Mode Is Off',
            name,
        }
    }
}