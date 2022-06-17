import Image from "next/image";

const Banner = () => {

    return <div className="">
        <div className="min-h-screen relative" >
            <Image layout="fill" className="w-full h-full object-cover" src={"/images/Banner/resort-building.jpg"} alt='Resort Building' />
        </div >

        <div className="absolute top-0 w-full h-full flex justify-center items-center text-rose-400 font-semibold">
            <div className="text-center text-3xl md:text-5xl p-5 md:p-10 rounded-xl bg-[#000000b3]">
                <h1 className="mb-1 md:mb-3">Timeless Plesure</h1>
                <h1>At Asnil Resort</h1>
                <button className="mt-4 md:mt-5 text-base md:text-lg bg-rose-500 text-white px-4 hover:bg-rose-400 py-1 rounded-full">Explore</button>
            </div>

        </div>

    </div >;
};
export default Banner;