import Link from "next/link";

const RoomsCount = () => {
    return <div className="container mx-auto mt-20 p-5">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-slate-800">Comfortable Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center md:justify-end items-center">
                <div>
                    <img className="rounded-lg" src="/images/Banner/office-reception.png" alt="Office" />
                </div>
            </div>
            <div className="flex justify-center items-center md:justify-start">
                <div>
                    <p className="text-justify max-w-md mb-5">
                        Asnil Resort features 22 Premium King Rooms, 6 Superior Top King, 6 Superior Top Twin, 12 Superior King, 24 Superior Twin, 6 Deluxe King/Twin, 6 Signature King Rooms, 6 Grand King Rooms, 3 Executive King Rooms, 2 Executive Suite and 1 Presidential Villa (3 B/R). All guests rooms & suites are designed with the latest state of the art technology and furnished in modern contemporary style, all to give the utmost comfortable work and sleep environment.
                    </p>
                    <Link href={'/rooms'}>
                        <a className="text-base md:text-lg bg-rose-500 text-white px-4 hover:bg-rose-400 py-1 rounded-full">Explore Rooms</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>;
};
export default RoomsCount;