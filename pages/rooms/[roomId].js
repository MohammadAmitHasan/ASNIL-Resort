import { useRouter } from 'next/router'
import RoomCompo from '../../Components/RoomCompo'

function Room({ room }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <RoomCompo room={room} />
        </div>
    )
}

export default Room

export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
        `http://localhost:4000/rooms/${params.roomId}`
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