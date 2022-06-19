import Link from "next/link";

const Review = ({ review }) => {
    return <>
        <Link href={`/reviews/${review.id}`}>
            <a>
                <div className="p-5 rounded-lg shadow-2xl">
                    <h3 className="text-3xl">User: {review.userName}</h3>
                    <p className="mt-2 text-lg">{review.review}</p>
                </div>
            </a>
        </Link>
    </>;
};
export default Review;