import { useRouter } from 'next/router'
import RoomCompo from '../../Components/RoomCompo'
import HomeLayout from '../../Layouts/HomeLayout'

function Room({ room }) {
    const router = useRouter()

    if (router.isFallback) {
        console.log(router.isFallback)
        return <div className='text-5xl text-center mt-10'>Loading...</div>
    }

    return (
        <HomeLayout>
            <div>
                <RoomCompo room={room} />
            </div>
        </HomeLayout>
    )
}

export default Room

export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
        `http://localhost:3000/api/rooms/${params.roomId}`
    )
    const data = await response.json()

    return {
        props: {
            room: data
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { roomId: '1' }
            },
            {
                params: { roomId: '2' }
            },
        ],
        fallback: true
    }
}