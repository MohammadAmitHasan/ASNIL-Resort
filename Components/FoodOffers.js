import Link from "next/link";

const FoodOffers = () => {

    return <div className="container mx-auto mt-20 px-5">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-slate-800">We Offer Buffet</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex justify-center md:justify-end items-center text-right">
                <div>
                    <h3 className="text-3xl font-semibold text-rose-500 mb-5">Get foods you much as you like</h3>

                    <p>Breakfast Time: 8am-10am</p>
                    <p>Lunch Time: 1pm-3pm</p>
                    <p className="mb-5">Dinner Time: 9pm-11pm</p>

                    <Link href={'/foodItems'}>
                        <a className="text-base md:text-lg bg-rose-500 text-white px-4 hover:bg-rose-400 py-1 rounded-full">Explore Items</a>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center md:justify-start items-center">
                <div>
                    <img className="rounded-lg shadow-lg" src="/images/banquet-table-with-snacks_144627-18361.webp" alt="foods in a table" />
                </div>
            </div>
        </div>
    </div>;
};
export default FoodOffers;