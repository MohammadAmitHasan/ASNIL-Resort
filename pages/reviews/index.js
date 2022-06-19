import { useState } from "react";
import HomeLayout from '../../Layouts/HomeLayout'
import useSWR from 'swr'
import Review from "../../Components/Review";

const Reviews = ({ reviews }) => {

    const [allReviews, setAllReviews] = useState(reviews)
    const [review, setReview] = useState('')
    const [user, setUser] = useState('')



    const fetchReviews = async () => {
        const response = await fetch('/api/reviews')
        const data = await response.json()
        setAllReviews(data)
    }

    // const fetcher = async () => {
    //     return reviews
    // }

    // const { data, error } = useSWR('reviews', fetcher)

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>


    const submitReview = async () => {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ user, review }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const postedData = await response.json()
        console.log(postedData)
        fetchReviews()
        setUser('')
        setReview('')
    }

    return <>
        <HomeLayout>
            <div>

                <div className="p-5">
                    <h3 className="text-2xl mb-4">Add A Review</h3>

                    <input className='p-2 border-2 border-blue-200 rounded-lg'
                        type='text'
                        value={user}
                        placeholder='User Name'
                        onChange={e => setUser(e.target.value)}
                    /> <br />
                    <textarea className="p-2 my-2 border-2 border-blue-200 rounded-lg"
                        cols="30" rows="10"
                        placeholder="Review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    ></textarea> <br />

                    <button className='p-2 bg-blue-900 text-white rounded-lg' onClick={submitReview}>Submit Review</button>

                </div>

                <h1 className="text-center text-3xl md:text-5xl pt-10 font-semibold">Our Clients Reviews</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {
                        allReviews.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
            </div>
        </HomeLayout>
    </>;
};
export default Reviews;

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/reviews`)
    const data = await response.json()

    return {
        props: {
            reviews: data
        }
    }
}