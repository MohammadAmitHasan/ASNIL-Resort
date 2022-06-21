import HomeLayout from "Layouts/HomeLayout";
import useSWR from 'swr'
import FoodItem from "Components/FoodItem";

const FoodItems = () => {

    const fetcher = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        const data = await response.json()
        return data
    }

    const { data, error } = useSWR('foodItems', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div className="text-5xl text-center mt-10">Loading...</div>

    return <div>
        <HomeLayout>
            <div className="container mx-auto p-5">
                <h1 className=""></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        data.meals.map(item => <FoodItem key={parseInt(item.idMeal)} item={item}></FoodItem>)
                    }
                </div>
            </div>
        </HomeLayout>
    </div>;
};
export default FoodItems;