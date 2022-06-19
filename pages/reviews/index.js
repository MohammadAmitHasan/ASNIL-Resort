import { useState } from "react";
import HomeLayout from '../../Layouts/HomeLayout'
import useSWR from 'swr'
import Review from "../../Components/Review";

const Reviews = () => {

    const [review, setReview] = useState('')

    const fetcher = async () => {
        const response = await fetch('/api/reviews')
        const data = await response.json()
        return data
    }

    const { data, error } = useSWR('reviews', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    const submitReview = async () => {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ review }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const postedData = await response.json()
        console.log(postedData)
        fetchReviews()
    }

    return <>
        <HomeLayout>
            <div>
                <h1 className="text-center text-3xl md:text-5xl pt-10 font-semibold">Our Clients Reviews</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {
                        data.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
            </div>
        </HomeLayout>
    </>;
};
export default Reviews;