import Image from "next/image";
import Link from "next/link";

const RoomCompo = ({ room }) => {
    console.log(room)
    const { id, img, title, description, price } = room;

    return <div className="shadow-lg p-5 rounded-lg max-w-lg mx-auto">
        <div>
            {/* <Image src={img} layout="fill" alt="Room" /> */}
            <img className="rounded-lg" src={img} alt="Room" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold my-2">Title: {title}</h3>
            <h2 className="my-2 text-2xl font-semibold">Price: {price} Tk</h2>
            <p className="text-lg text-gray-700">{description}</p>

            <Link href={`/rooms/${id}`}>
                <button className="text-white px-3 py-2 bg-rose-500 rounded-lg mt-3 hover:bg-rose-600">Book Now</button>
            </Link>
        </div>
    </div>;
};
export default RoomCompo;