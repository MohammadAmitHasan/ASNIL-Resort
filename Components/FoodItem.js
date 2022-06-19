const FoodItem = ({ item }) => {
    console.log(item)
    const { strMealThumb, strCategory, strMeal, strTags, strArea } = item
    return <div className="shadow-lg rounded-lg p-5">
        <div>
            <img className="rounded-lg" src={strMealThumb} alt="food" />
        </div>
        <div className="mt-4">
            <p className="mb-2 text-lg">Name: {strMeal}</p>
            <p className="mb-2 text-lg">Category: {strCategory}</p>
            <p className="mb-2 text-lg">Area: {strArea}</p>
            <p className="mb-2 text-lg">Tags: {strTags}</p>
        </div>
    </div>;
};
export default FoodItem;