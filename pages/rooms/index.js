import RoomCompo from "Components/RoomCompo";
import HomeLayout from "Layouts/HomeLayout";
import { server } from 'config/index'

const Rooms = ({ rooms }) => {
    return <>
        <HomeLayout>
            <div className="container mx-auto mt-14">
                <h1 className="text-3xl md:text-5xl text-rose-500 font-semibold text-center py-5">Select Your suitbale room and book</h1>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {
                        rooms?.map(room => <RoomCompo key={room?.id} room={room} />)
                    }
                </div>
            </div>
        </HomeLayout>
    </>;
};
export default Rooms;


export async function getStaticProps() {
    const response = await fetch(`http://localhost:4000/rooms`)
    const data = await response.json()

    return {
        props: {
            rooms: data
        },
        revalidate: 30
    }
}