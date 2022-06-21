import { useRouter } from "next/router";
import Review from "Components/Review";
import HomeLayout from "Layouts/HomeLayout";
import { server } from 'config/index'

const SingleReview = ({ review }) => {

    const router = useRouter()

    const deleteHandler = async () => {
        const response = await fetch(`/api/reviews/${review.id}`, {
            method: 'DELETE'
        })
        router.replace('/reviews')
    }


    return <div>
        <HomeLayout>
            <div className="mx-auto pt-10 text-center max-w-lg">
                <Review review={review} />
                <button onClick={deleteHandler} className="mt-10 border-2 px-3 py-1 border-slate-800 hover:border-rose-600 rounded-lg">Delete This Comment</button>
            </div>

        </HomeLayout>
    </div>;
};

export default SingleReview

export async function getServerSideProps(context) {
    const { params } = context
    const { reviewId } = params
    const response = await fetch(`http://localhost:4000/reviews/${reviewId}`)
    const data = await response.json()

    return {
        props: {
            review: data
        }
    }
}